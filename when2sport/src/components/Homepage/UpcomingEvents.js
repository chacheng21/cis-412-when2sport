import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import TimeAssociatedEventCard from "./TimeAssociatedEventCard";

const UpcomingEvents = () => {
  // Sample data for the FlatList
  const events = [
    { time: "16:00" },
    { time: "18:00" }
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
          <TimeAssociatedEventCard time={item.time} />
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