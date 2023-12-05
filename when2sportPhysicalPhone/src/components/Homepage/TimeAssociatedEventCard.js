import React from "react";
import { View, StyleSheet, Text } from "react-native";
import EventCard from "./EventCard";  // Assuming ProfileCard is in the same directory

const TimeAssociatedEventCard = (props) => {
  console.log("HELLO")
  console.log(props.startTime)
  console.log(props.startTime.split(/\s+/))
  return (
    <View style={styles.container}>
      <View style={styles.timeWrapper}>
        <Text style={styles.timeText}>{`${props.startTime.split(/\s+/)[0]}`}</Text>
        <Text style={styles.timeText}>{`  ${props.startTime.split(/\s+/)[1]}`}</Text>
      </View>
      <EventCard {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    margin: 5,
  },
  timeWrapper: {
    marginRight: 15,
    justifyContent: "flex-start",
  },
  timeText: {
    fontSize: 18,
    color: "#1A508E",
    textAlign: 'left',
  }
});


export default TimeAssociatedEventCard;