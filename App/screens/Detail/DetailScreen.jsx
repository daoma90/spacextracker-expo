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
  const [cardHeight, setCardHeight] = useState();

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
            <DetailList
              title="Payload"
              items={[launch?.payloads[0].name, launch?.payloads[0]?.type]}
            />
            <DetailList
              title="Launchpad"
              items={[
                launch?.launchpad?.name,
                launch?.launchpad?.full_name,
                launch?.launchpad?.region,
              ]}
            />
            <DetailList
              title="Target"
              items={[launch?.payloads[0].orbit, launch?.payloads[0]?.reference_system]}
            />
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
