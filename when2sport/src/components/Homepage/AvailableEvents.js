import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import TimeAssociatedEventCard from "./TimeAssociatedEventCard";

function AvailableEvents() {
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
        {/* Sample Events */}
        <TimeAssociatedEventCard time="16:00" />
        <TimeAssociatedEventCard time="18:00" />
        <TimeAssociatedEventCard time="20:00" />
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
  },
});

export default AvailableEvents;