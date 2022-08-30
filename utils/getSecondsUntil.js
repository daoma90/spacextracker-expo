const getSecondsUntil = (dateTimeUTC) => {
  const launchTime = new Date(dateTimeUTC).getTime();
  const now = Date.now();

  const timeBetween = launchTime - now;

  return timeBetween / 1000;
};

export { getSecondsUntil };
