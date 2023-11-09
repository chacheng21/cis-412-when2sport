import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import TimeAssociatedEventCard from "./TimeAssociatedEventCard";
import availableEvents from '../../assets/data/AvailableEvents.json'

const events = availableEvents;

const AvailableEvents = ({ username, navigation }) => {
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
          return <TimeAssociatedEventCard username={username} key={index} title={item.title} date={item.date} startTime={item.startTime} endTime={item.endTime}
            sport={item.sport} skillLevel={item.skillLevel} location={item.location} capacity={item.capacity} attendees={item.attendees}
            host={item.host} navigation={navigation}
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