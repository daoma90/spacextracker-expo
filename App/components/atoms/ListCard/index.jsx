import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useRocketContext } from "../../../../context/RocketContext";
import { getReadableDate, getReadableTime } from "../../../../utils/convertDateTime";
import getRocketName from "../../../../utils/getRocketName";
import CustomImage from "../CustomImage";
import CustomTouchable from "../CustomTouchable.jsx";
import Divider from "../Divider";
import * as s from "./styles";
import * as t from "../Typography";
import Spacer from "../Spacer";
import DefaultIcon from "../DefaultIcon";
import { MotiView } from "moti";

const ListCard = ({ launch, type, index }) => {
  const { rockets } = useRocketContext();
  const navigation = useNavigation();
  return (
    <MotiView
      from={index < 10 && { translateX: 400 }}
      animate={index < 10 && { translateX: 0 }}
      transition={index < 10 && { type: "timing", duration: 300, ease: "out" }}
      delay={index * 50}
    >
      <CustomTouchable
        onPress={() => navigation.navigate("Details", { launch: launch, type: type })}
        pressable
      >
        <s.Container>
          <s.ImagePositioner>
            <s.ImageContainer>
              {launch?.links?.patch?.small ? (
                <CustomImage image={launch?.links?.patch?.small} objectFit="contain" />
              ) : (
                <DefaultIcon />
              )}
            </s.ImageContainer>
          </s.ImagePositioner>
          <s.InfoContainer>
            <s.Row>
              <t.ListCardName>{launch?.name}</t.ListCardName>
              <t.CardResult success={launch?.success === true}>
                {launch?.success === true ? "success" : launch?.success === null ? "" : "failed"}
              </t.CardResult>
            </s.Row>
            <Spacer direction="vertical" space="14" />
            <Divider />
            <Spacer direction="vertical" space="14" />
            <s.Row>
              <t.CardRocketName>{getRocketName(launch?.rocket, rockets)}</t.CardRocketName>
              <s.DateContainer>
                {launch?.date_precision === "hour" && (
                  <t.ListCardDate>{getReadableTime(launch?.date_utc)}</t.ListCardDate>
                )}
                <Spacer direction="horizontal" space="10" />
                <t.ListCardDate>
                  {getReadableDate(launch?.date_utc, launch?.date_precision)}
                </t.ListCardDate>
              </s.DateContainer>
            </s.Row>
          </s.InfoContainer>
        </s.Container>
      </CustomTouchable>
    </MotiView>
  );
};

export default ListCard;
