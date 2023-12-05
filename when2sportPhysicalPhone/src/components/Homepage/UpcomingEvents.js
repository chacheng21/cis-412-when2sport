import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import TimeAssociatedEventCard from "./TimeAssociatedEventCard";
import { useUpcomingEvents } from "../../constants/UpcomingEventsContext";

const parseTime = (timeString) => {
  let [time, modifier] = timeString.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (modifier === 'PM' && hours < 12) {
    hours += 12;
  } else if (modifier === 'AM' && hours === 12) {
    hours = 0;
  }
  return hours * 60 + minutes; // Convert time to minutes
}

const UpcomingEvents = ({ username, navigation }) => {
  const { upcomingEvents, setUpcomingEvents } = useUpcomingEvents();
  const sortedUpcomingEvents = upcomingEvents.sort((a, b) => { return parseTime(a.startTime) - parseTime(b.startTime) })
  console.log(sortedUpcomingEvents)
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Upcoming Events</Text>
      </View>
      {sortedUpcomingEvents.length > 0 ? (
        <FlatList
          data={sortedUpcomingEvents.sort((a, b) => {return parseTime(a.startTime) - parseTime(b.startTime)})}
          renderItem={({ item }) => (
            <TimeAssociatedEventCard username={username} title={item.title} date={item.date} startTime={item.startTime} endTime={item.endTime}
              sport={item.sport} skillLevel={item.skillLevel} location={item.location} capacity={item.capacity} attendees={item.attendees}
              host={item.host} navigation={navigation} privacy={item.privacy} id={item.id}
            />
          )}
          keyExtractor={(item, index) => index}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
        />
      ) : (
        <Text style={styles.noEventsText}>No Upcoming Events</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#6F9BD1',
    minHeight: 210
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  noEventsText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 50, // Center the text vertically within the container
  },
});

export default UpcomingEvents;