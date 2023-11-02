import React from "react";
import { View, StyleSheet, Text } from "react-native";
import EventCard from "./EventCard";  // Assuming ProfileCard is in the same directory

function TimeAssociatedEventCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.timeWrapper}>
        <Text style={styles.timeText}>{props.time}</Text>
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