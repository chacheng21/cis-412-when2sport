import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import TimeAssociatedEventCard from "./TimeAssociatedEventCard";

const events = [
  {
    id: Math.random().toString(36).substring(7),
    title: "Tennis Doubles",
    date: "October 19, 2023",
    time: "4:00pm - 6:00pm",
    sport: "Tennis",
    skillLevel: "Beginner",
    location: "Penn Tennis Center",
    capacity: 4,
    attendees: 3,
    isJoined: false,
    host: "Charles Cheng"
  },
  {
    id: Math.random().toString(36).substring(7),
    title: "Co-Ed Soccer",
    date: "October 19, 2023",
    time: "6:00pm - 9:00pm",
    sport: "Soccer",
    skillLevel: "Advanced",
    location: "Penn Park",
    capacity: 10,
    attendees: 8,
    isJoined: false,
    host: "Jane Doe"
  },
];

const AvailableEvents = ({ navigation }) => {
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
        {events.map((item, index) => {
          return <TimeAssociatedEventCard key={index} title={item.title} date={item.date} time={item.time}
            sport={item.sport} skillLevel={item.skillLevel} location={item.location} capacity={item.capacity} attendees={item.attendees}
            isJoined={item.isJoined} host={item.host} navigation={navigation}
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