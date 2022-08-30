import React from "react";
import DetailText from "../../atoms/DetailText";
import * as s from "./styles";

const DetailInfo = () => {
  return (
    <s.Container>
      <DetailText
        title="Details"
        text="This mission launches the sixteenth batch of operational Starlink satellites, which are version 1.0, from LC-39A. It is the eighteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS."
      />
    </s.Container>
  );
};

export default DetailInfo;
