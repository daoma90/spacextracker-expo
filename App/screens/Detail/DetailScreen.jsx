import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useLaunchContext } from "../../../context/LaunchContext";
import DetailList from "../../components/atoms/DetailList";
import CardLarge from "../../components/molecules/CardLarge";
import DetailInfo from "../../components/molecules/DetailInfo";
import DetailVideo from "../../components/molecules/DetailVideo";
import * as s from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../theme";
import MainButton from "../../components/atoms/MainButton";
import addToCalendar from "../../../utils/addToCalendar";
import SideScroller from "../../components/molecules/SideScroller";

const DetailScreen = ({ route }) => {
  const { launch, type } = route.params;
  const { fetchPayload, fetchLaunchpad } = useLaunchContext();
  const [payload, setPayload] = useState(null);
  const [launchpad, setLaunchpad] = useState(null);
  const [target, setTarget] = useState(null);
  const [cardHeight, setCardHeight] = useState();
  useEffect(() => {
    (async () => {
      if (launch.payloads[0]) {
        const payload = await fetchPayload(launch?.payloads[0]);
        if (payload) {
          setPayload([payload.name, payload.type]);
          setTarget([payload.orbit, payload.reference_system]);
        }
      }
      if (launch.launchpad) {
        const launchpad = await fetchLaunchpad(launch?.launchpad);
        if (launchpad) {
          setLaunchpad([launchpad.name, launchpad.full_name, launchpad.region]);
        }
      }
    })();
  }, []);

  return (
    <ScrollView>
      <s.Container>
        <s.HeroImageContainer>
          <s.StyledImage source={require("../../../assets/rocket-launch.png")} resizeMode="cover" />
        </s.HeroImageContainer>
        <LinearGradient
          colors={["transparent", colors.background]}
          style={s.GradientArea}
          start={{ x: 0, y: 0.2 }}
          end={{ x: 0, y: 0.5 }}
        />
        <s.SecondaryContainer hasCountdown={launch?.upcoming}>
          <s.CardContainer
            onLayout={(event) => setCardHeight(Math.floor(event.nativeEvent.layout.height))}
            hasCountdown={launch?.upcoming}
          >
            <CardLarge launchData={launch} type={type} pressable={false} />
          </s.CardContainer>

          <s.DetailsContainer hasCountdown={launch?.upcoming}>
            {launch?.upcoming && launch?.date_precision === "hour" && (
              <s.ButtonContainer>
                <MainButton buttonText="Add to calendar" onPress={() => addToCalendar(launch)} />
              </s.ButtonContainer>
            )}
            <DetailInfo />
            <DetailList title="Payload" items={payload} />
            <DetailList title="Launchpad" items={launchpad} />
            <DetailList title="Target" items={target} />
            {launch?.links?.youtube_id && <DetailVideo source={launch?.links?.youtube_id} />}
            {launch?.links?.flickr?.small?.length > 0 ? (
              <SideScroller items={launch.links.flickr.small} />
            ) : launch?.links?.flickr?.original?.length > 0 ? (
              <SideScroller items={launch.links.flickr.original} />
            ) : null}
          </s.DetailsContainer>
        </s.SecondaryContainer>
      </s.Container>
    </ScrollView>
  );
};

export default DetailScreen;
