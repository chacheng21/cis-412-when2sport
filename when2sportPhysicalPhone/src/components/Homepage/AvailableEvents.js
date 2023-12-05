import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import TimeAssociatedEventCard from "./TimeAssociatedEventCard";
import { useAvailableEvents } from "../../constants/AvailableEventsContext";

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

const AvailableEvents = ({ username, navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { availableEvents, setAvailableEvents } = useAvailableEvents()

  const onDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const sortedAvailableEvents = availableEvents.sort((a, b) => { return parseTime(a.startTime) - parseTime(b.startTime) })

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Events Happening On </Text>
      <View style={styles.datePickerContainer}>
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={onDateChange}
          textColor='#1A508E'
          textAlign='left'
        />
      </View>

      <ScrollView style={styles.eventsList}>
        {sortedAvailableEvents.sort((a, b) => { return parseTime(a.startTime) - parseTime(b.startTime) }).map((item, index) => {
          return <TimeAssociatedEventCard username={username} key={index} title={item.title} date={item.date} startTime={item.startTime} endTime={item.endTime}
            sport={item.sport} skillLevel={item.skillLevel} location={item.location} capacity={item.capacity} attendees={item.attendees}
            host={item.host} navigation={navigation} privacy={item.privacy} id={item.id}
          />
        })}
      </ScrollView>
    </View>
  );
}

const EVENT_CARD_HEIGHT = 150;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1A508E',
  },
  datePickerContainer: {
    marginBottom: 6,
    width: '100%',
    alignItems: "left-start",
    textAlign: 'left',
  },
  eventsList: {
    height: EVENT_CARD_HEIGHT * 2, // Display 2 events at a time
    flex: 1,
    marginTop: 10,
    left: 8,
  },
  addButton: {
    backgroundColor: 'red',
    borderRadius: 25,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 40,
  },
});

export default AvailableEvents;