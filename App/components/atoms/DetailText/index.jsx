import React from "react";
import * as s from "./styles";
import * as t from "../../atoms/Typography";
import Divider from "../Divider";
import Spacer from "../Spacer";

const DetailText = ({ title, text }) => {
  return (
    <s.Container>
      <t.ListCardName>{title}</t.ListCardName>
      <Spacer direction="vertical" space="5" />
      <Divider direction="vertical" space="20" />
      <Spacer direction="vertical" space="5" />
      <t.BreadText>{text ? text : "N/A"}</t.BreadText>
    </s.Container>
  );
};

export default DetailText;
