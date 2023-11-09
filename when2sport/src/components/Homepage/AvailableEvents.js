import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import TimeAssociatedEventCard from "./TimeAssociatedEventCard";

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
    isJoined: false,
    host: "Charles Cheng"
  },
  {
    title: "Co-Ed Soccer",
    date: "October 19, 2023",
    time: "6:00pm - 9:00pm",
    sport: "Soccer",
    skillLevel: "hard",
    location: "Penn Park",
    capacity: 10,
    attendees: 8,
    isJoined: false,
    host: "Jane Doe"
  },
];

const AvailableEvents = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.datePickerContainer}>
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={onDateChange}
        />
      </View>

      <ScrollView style={styles.eventsList}>
        {events.map(item => {
          return <TimeAssociatedEventCard title={item.title} date={item.date} time={item.time}
            sport={item.sport} skillLevel={item.skillLevel} location={item.location} capacity={item.capacity} attendees={item.attendees}
            isJoined={item.isJoined} host={item.host} 
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
  datePickerContainer: {
    marginBottom: 10,
    width: '100%',
    alignItems: "flex-start",
    marginLeft: -8,
  },
  eventsList: {
    height: EVENT_CARD_HEIGHT * 2, // Display 2 events at a time
    flex: 1,
    marginTop: 10,
    left: 8,
  },
});

export default AvailableEvents;