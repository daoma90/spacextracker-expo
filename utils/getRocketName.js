const getRocketName = (rocketId, rockets) => {
  let rocketName;
  rockets.map((rocket) => {
    if (rocket.id === rocketId) {
      rocketName = rocket.name;
    }
  });
  return rocketName;
};

export default getRocketName;
