import React from "react";
import { View, StyleSheet, Text } from "react-native";
import EventCard from "./EventCard";  // Assuming ProfileCard is in the same directory

function extractTimeAndPeriod(timeRangeStr) {
  // Extract the start time and convert 'am' or 'pm' to uppercase
  const startTimeMatch = timeRangeStr.match(/(\d+:\d+)(am|pm)/i);

  if (startTimeMatch) {
    const startTime = startTimeMatch[1];
    const period = startTimeMatch[2].toUpperCase();
    return [startTime, period];
  }

  return []; // Return an empty array if the format doesn't match
}

const TimeAssociatedEventCard = (props) => {
  const timePeriod = extractTimeAndPeriod(props.time)
  return (
    <View style={styles.container}>
      <View style={styles.timeWrapper}>
        <Text style={styles.timeText}>{timePeriod[0]}</Text>
        <Text style={styles.timeText}>{`  ${timePeriod[1]}`}</Text>
      </View>
      <EventCard {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",  // Align the children components to the top
    margin: 10,
  },
  timeWrapper: {
    marginRight: 15,          // Space between time and the EventCard
    justifyContent: "flex-start", // Align text to the top
  },
  timeText: {
    fontSize: 18,
    color: "#000",
  }
});


export default TimeAssociatedEventCard;