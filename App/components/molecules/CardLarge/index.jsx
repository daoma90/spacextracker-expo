import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useRocketContext } from "../../../../context/RocketContext";
import { getReadableDate, getReadableTime } from "../../../../utils/convertDateTime";
import getRocketName from "../../../../utils/getRocketName";
import CustomImage from "../../atoms/CustomImage";
import CustomTouchable from "../../atoms/CustomTouchable.jsx";
import Divider from "../../atoms/Divider";
import * as s from "./styles";
import * as t from "../../atoms/Typography";
import CountdownTimer from "../../atoms/CountdownTimer";
import DefaultIcon from "../../atoms/DefaultIcon";
import { useLaunchContext } from "../../../../context/LaunchContext";
import { useCountdown } from "../../../../hooks/useCountdown";

const CardLarge = ({ type, launchData = false, marginBottom, pressable = true }) => {
  const navigation = useNavigation();
  const [launch, setLaunch] = useState(launchData);
  const { nextLaunch, fetchNextLaunch, previousLaunch, fetchPreviousLaunch } = useLaunchContext();
  // const [hasLaunched] = useCountdown(nextLaunch?.date_utc);
  // console.log("launch", launch);
  // useEffect(() => {
  //   if (!launch) {
  //     fetchNextLaunch();
  //     fetchPreviousLaunch();
  //   }
  // }, []);

  useEffect(() => {
    if (type === "Next launch") {
      setLaunch(nextLaunch);
    } else if (type === "Previous launch") {
      setLaunch(previousLaunch);
    }
  }, [nextLaunch, previousLaunch]);
  let timer;
  // useEffect(() => {
  //   if (hasLaunched) {
  //   timer = setTimeout(() => {
  //     fetchNextLaunch();
  //   }, 60000);
  //   }
  //   return () => clearTimeout(timer);
  // }, [nextLaunch]);

  return (
    <s.Container marginBottom={marginBottom}>
      <s.ImagePositioner>
        <s.ImageContainer pointerEvents="none">
          {launch?.links?.patch?.small ? (
            <CustomImage image={launch?.links?.patch?.small} objectFit="contain" />
          ) : (
            <DefaultIcon />
          )}
        </s.ImageContainer>
      </s.ImagePositioner>
      <CustomTouchable
        pressable={pressable}
        onPress={() => navigation.navigate("Details", { launch: launch, type: type })}
      >
        <s.CardContainer minHeight={launch === null}>
          {launch !== null && (
            <>
              <s.LaunchNumberContainer>
                <t.CardLargeLaunchNumber>{launch?.flight_number}</t.CardLargeLaunchNumber>
                <t.CardResult success={launch?.success === true}>
                  {launch?.success === true ? "Success" : launch?.success === null ? "" : "Failed"}
                </t.CardResult>
              </s.LaunchNumberContainer>
              <t.CardLargeTitle mb="6">{type}</t.CardLargeTitle>

              {launch?.upcoming && <CountdownTimer targetDate={launch.date_utc} />}
              <t.CardLargeName>{launch?.name}</t.CardLargeName>
              <t.CardRocketName>{launch?.rocket?.name}</t.CardRocketName>
              <Divider />
              <t.CardLargeDate>
                {getReadableDate(launch?.date_utc, launch?.date_precision)}
              </t.CardLargeDate>
              {launch?.date_precision === "hour" && (
                <t.CardLargeDate>{getReadableTime(launch?.date_utc)}</t.CardLargeDate>
              )}
            </>
          )}
        </s.CardContainer>
      </CustomTouchable>
    </s.Container>
  );
};

export default CardLarge;
