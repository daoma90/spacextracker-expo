import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countdown, setCountdown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countdown);
};

const getReturnValues = (countdown) => {
  let days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  let hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  if (days < 10) days = "0" + days;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return [days, hours, minutes, seconds];
};

export { useCountdown };
