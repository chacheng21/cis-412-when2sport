import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import TimeAssociatedEventCard from "./TimeAssociatedEventCard";

const UpcomingEvents = () => {
  // Sample data for the FlatList
  const events = [
    {
      title: "Tennis Doubles",
      date: "October 19, 2023",
      time: "4:00pm - 6:00pm",
      sport: "Tennis",
      skillLevel: "easy",
      location: "Penn Tennis Center",
      capacity: 4,
      attendees: 3,
      isJoined: true,
      host: "Charles Cheng"
    },
    {
      title: "Tennis Doubles",
      date: "October 19, 2023",
      time: "7:00pm - 9:00pm",
      sport: "Tennis",
      skillLevel: "medium",
      location: "Penn Tennis Center",
      capacity: 10,
      attendees: 8,
      isJoined: true,
      host: "Charles Cheng"
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Upcoming Events</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={events}
        renderItem={({ item }) => (
          <TimeAssociatedEventCard title={item.title} date={item.date} time={item.time}
            sport={item.sport} skillLevel={item.skillLevel} location={item.location} capacity={item.capacity} attendees={item.attendees}
            isJoined={item.isJoined} host={item.host} 
          />
        )}
        keyExtractor={item => item.time}
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'red',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
  },
});

export default UpcomingEvents;