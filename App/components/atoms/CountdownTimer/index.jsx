import React from "react";
import { useCountdown } from "../../../../hooks/useCountdown";
import * as t from "../Typography";
import * as s from "./styles";

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <s.Container>
      <s.CountdownItem>
        <t.CountdownText>{days}</t.CountdownText>
        <s.CountdownLabel>
          <t.BreadText>DD</t.BreadText>
        </s.CountdownLabel>
      </s.CountdownItem>
      <s.Separator>:</s.Separator>
      <s.CountdownItem>
        <t.CountdownText>{hours}</t.CountdownText>
        <s.CountdownLabel>
          <t.BreadText>HH</t.BreadText>
        </s.CountdownLabel>
      </s.CountdownItem>
      <s.Separator>:</s.Separator>
      <s.CountdownItem>
        <t.CountdownText>{minutes}</t.CountdownText>
        <s.CountdownLabel>
          <t.BreadText>MM</t.BreadText>
        </s.CountdownLabel>
      </s.CountdownItem>
      <s.Separator>:</s.Separator>
      <s.CountdownItem>
        <t.CountdownText>{seconds}</t.CountdownText>
        <s.CountdownLabel>
          <t.BreadText>SS</t.BreadText>
        </s.CountdownLabel>
      </s.CountdownItem>
    </s.Container>
  );
};

export default CountdownTimer;
