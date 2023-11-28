import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import TimeAssociatedEventCard from "./TimeAssociatedEventCard";
import { useUpcomingEvents } from "../../constants/UpcomingEventsContext";

const UpcomingEvents = ({ username, navigation }) => {
  const { upcomingEvents, setUpcomingEvents } = useUpcomingEvents();
  // Sample data for the FlatList
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Upcoming Events</Text>
      </View>

      <FlatList
        data={upcomingEvents}
        renderItem={({ item }) => (
          <TimeAssociatedEventCard username={username} title={item.title} date={item.date} startTime={item.startTime} endTime={item.endTime}
            sport={item.sport} skillLevel={item.skillLevel} location={item.location} capacity={item.capacity} attendees={item.attendees}
            host={item.host} navigation={navigation} privacy={item.privacy} id ={item.id}
          />
        )}
        keyExtractor={(item, index) => index}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
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
});

export default UpcomingEvents;