import React from "react";
import { View, StyleSheet, Text } from "react-native";
import EventCard from "./EventCard";  // Assuming ProfileCard is in the same directory

const TimeAssociatedEventCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.timeWrapper}>
        <Text style={styles.timeText}>{`${props.startTime.split(" ")[0]}`}</Text>
        <Text style={styles.timeText}>{`  ${props.startTime.split(" ")[1]}`}</Text>
      </View>
      <EventCard {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    margin: 10,
  },
  timeWrapper: {
    marginRight: 15,
    justifyContent: "flex-start",
  },
  timeText: {
    fontSize: 18,
    color: "#000",
  }
});


export default TimeAssociatedEventCard;