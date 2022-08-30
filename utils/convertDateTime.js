const getReadableDate = (dateTimeUTC) => {
  const dateTime = new Date(dateTimeUTC);
  const year = dateTime.getFullYear();
  let month = dateTime.getMonth() + 1;
  let day = dateTime.getDate();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  return `${day}-${month}-${year}`;
};

const getReadableTime = (dateTimeUTC) => {
  const dateTime = new Date(dateTimeUTC);
  let hour = dateTime.getHours();
  let minute = dateTime.getMinutes();

  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;

  return `${hour}:${minute}`;
};

export { getReadableDate, getReadableTime };
