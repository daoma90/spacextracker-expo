import YoutubeIframe from "react-native-youtube-iframe";
import React from "react";
import * as s from "./styles";

const VideoPlayer = ({ source }) => {
  return (
    <s.Container>
      {source && (
        <YoutubeIframe
          videoId={source}
          height={200}
          width={"100%"}
          onError={(e) => console.log("error", e)}
          onChangeState={(event) => console.log("event", event)}
          webViewStyle={{ opacity: 0.99 }}
        />
      )}
    </s.Container>
  );
};

export default VideoPlayer;
