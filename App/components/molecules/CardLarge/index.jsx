import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useRocketContext } from "../../../../context/RocketContext";
import { getReadableDate, getReadableTime } from "../../../../utils/convertDateTime";
import getRocketName from "../../../../utils/getRocketName";
import CustomCard from "../../atoms/CustomCard";
import CustomImage from "../../atoms/CustomImage";
import CustomTouchable from "../../atoms/CustomTouchable.jsx";
import Divider from "../../atoms/Divider";
import * as s from "./styles";
import * as t from "../../atoms/Typography";
import Spacer from "../../atoms/Spacer";
import CountdownTimer from "../../atoms/CountdownTimer";
import DefaultIcon from "../../atoms/DefaultIcon";

const CardLarge = ({ type, launch, marginBottom, pressable = true }) => {
  const { rockets } = useRocketContext();
  const navigation = useNavigation();

  return (
    <s.Container marginBottom={marginBottom}>
      <s.ImagePositioner>
        <s.ImageContainer>
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
              <t.CardLargeTitle>{type}</t.CardLargeTitle>
              <Spacer direction="vertical" space="6" />
              {launch?.upcoming && <CountdownTimer targetDate={launch.date_utc} />}
              <Spacer direction="vertical" space="6" />
              <t.CardLargeName>{launch?.name}</t.CardLargeName>
              <Spacer direction="vertical" space="6" />
              <t.CardRocketName>{getRocketName(launch?.rocket, rockets)}</t.CardRocketName>
              <Spacer direction="vertical" space="6" />
              <Divider />
              <Spacer direction="vertical" space="6" />
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
