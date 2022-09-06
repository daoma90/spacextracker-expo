import * as Calendar from "expo-calendar";
import { Platform } from "react-native";
import { colors } from "../theme";

const addToCalendar = async (launch) => {
  const getDefaultCalendarSource = async () => {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.id;
  };

  const calendarId = await getDefaultCalendarSource();

  const { status } = await Calendar.requestCalendarPermissionsAsync();
  const startDate = new Date(launch?.date_utc);
  const endDate = new Date(launch?.date_utc);
  endDate.setHours(endDate.getHours() + 1);
  if (status === "granted") {
    const eventId = await Calendar.createEventAsync(calendarId, {
      title: "Space X launch",
      startDate: startDate,
      endDate: endDate,
    });
    if (Platform.OS !== "ios") {
      Calendar.openEventInCalendar(eventId);
    }
  }
};

export default addToCalendar;
