import React from "react";
import VideoPlayer from "../../atoms/VideoPlayer";
import * as s from "./styles";
import * as t from "../../atoms/Typography";
import Spacer from "../../atoms/Spacer";
import Divider from "../../atoms/Divider";

const DetailVideo = ({ source }) => {
  return (
    <s.Container>
      <t.ListCardName>Watch launch</t.ListCardName>
      <Divider direction="vertical" space="20" />
      <VideoPlayer source={source} />
    </s.Container>
  );
};

export default DetailVideo;
