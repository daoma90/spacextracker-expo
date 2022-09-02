import { useNavigation } from "@react-navigation/native";
import React from "react";
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

const CardLarge = ({ type, launch, marginBottom, pressable = true }) => {
  const { rockets } = useRocketContext();
  const navigation = useNavigation();
  // console.log("launch", launch);

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
              <t.CardRocketName>{getRocketName(launch?.rocket, rockets)}</t.CardRocketName>
              <Divider />
              <t.CardLargeDate>{getReadableDate(launch?.date_utc)}</t.CardLargeDate>
              <t.CardLargeDate>{getReadableTime(launch?.date_utc)}</t.CardLargeDate>
            </>
          )}
        </s.CardContainer>
      </CustomTouchable>
    </s.Container>
  );
};

export default CardLarge;
