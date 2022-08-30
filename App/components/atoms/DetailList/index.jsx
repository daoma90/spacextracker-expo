import React from "react";
import * as s from "./styles";
import * as t from "../../atoms/Typography";
import Divider from "../Divider";
import Spacer from "../Spacer";
import { View } from "react-native";

const DetailList = ({ title, items }) => {
  return (
    <s.Container>
      <t.ListCardName>{title}</t.ListCardName>
      <Spacer direction="vertical" space="5" />
      <Divider direction="vertical" space="20" />
      <Spacer direction="vertical" space="5" />
      {items ? (
        items.map((item, index) => (
          <View key={index}>
            <t.BreadText>{item}</t.BreadText>
            {index !== items.length - 1 && <Spacer direction="vertical" space="5" />}
          </View>
        ))
      ) : (
        <t.BreadText>{"N/A"}</t.BreadText>
      )}
    </s.Container>
  );
};

export default DetailList;
