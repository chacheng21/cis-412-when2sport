import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import TimeAssociatedEventCard from "./TimeAssociatedEventCard";
import { useUpcomingEvents } from "../../constants/UpcomingEventsContext";

const parseTime = (timeString) => {
  let [time, modifier] = timeString.split(/\s+/);
  let [hours, minutes] = time.split(':').map(Number);
  if (modifier === 'PM' && hours < 12) {
    hours += 12;
  } else if (modifier === 'AM' && hours === 12) {
    hours = 0;
  }
  return hours * 60 + minutes; // Convert time to minutes
}

const UpcomingEvents = ({ username, navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { upcomingEvents, setUpcomingEvents } = useUpcomingEvents();

  const onDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const filteredUpcomingEvents = upcomingEvents.filter(item => {
    let selectedDateString = selectedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return item.date === selectedDateString
  })

  const sortedUpcomingEvents = filteredUpcomingEvents.sort((a, b) => { return parseTime(a.startTime) - parseTime(b.startTime) })
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Enrolled Events </Text>
      </View>
      <View style={styles.datePickerContainer}>
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={onDateChange}
          textColor='white'
          textAlign='left'
        />
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
        <Text style={styles.noEventsText}>No Upcoming Events </Text>
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
    backgroundColor: '#73A6E5',
    minHeight: 210,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  noEventsText: {
    fontSize: 20,
    color: '#2E68AA',
    textAlign: 'center',
    marginTop: 50, // Center the text vertically within the container
  },
  datePickerContainer: {
    position: 'absolute',
    right: 10, // adjust as needed
    top: 5 // adjust as needed
  },
});

export default UpcomingEvents;