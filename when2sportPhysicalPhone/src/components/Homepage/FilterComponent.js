import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import DateTimePicker from '@react-native-community/datetimepicker';

function FilterComponent({selectedDate, setSelectedDate, sport, setSport, skillLevel, setSkillLevel}) {
  const [activeFilter, setActiveFilter] = useState(''); // To track which filter is active

  const onDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Available Events</Text>
        <View style={styles.filtersRow}>
          <TouchableOpacity style={styles.filterButton} onPress={() => setActiveFilter(activeFilter === 'time' ? '' : 'time')}>
            <Text style={styles.filterButtonText}>Date</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} onPress={() => setActiveFilter(activeFilter === 'sport' ? '' : 'sport')}>
            <Text style={styles.filterButtonText}>Sport</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} onPress={() => setActiveFilter(activeFilter === 'skill' ? '' : 'skill')}>
            <Text style={styles.filterButtonText}>Skill Level</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Time Filter */}
      {activeFilter === 'time' &&
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
      }

      {activeFilter === 'sport' &&
        <RadioButton.Group style={{ marginBottom: -20 }} onValueChange={setSport} value={sport} >
          <RadioButton.Item label="All Sports" value="all" />
          <RadioButton.Item label="Badminton" value="badminton" />
          <RadioButton.Item label="Baseball" value="baseball" />
          <RadioButton.Item label="Basketball" value="basketball" />
          <RadioButton.Item label="Football" value="football" />
          <RadioButton.Item label="Pickleball" value="pickleball" />
          <RadioButton.Item label="Ping Pong" value="pingpong" />
          <RadioButton.Item label="Soccer" value="soccer" />
          <RadioButton.Item label="Tennis" value="tennis" />
          <RadioButton.Item label="Volleyball" value="volleyball" />
          {/* Add more sports options if needed */}
        </RadioButton.Group>
      }

      {activeFilter === 'skill' &&
        <RadioButton.Group style={{ marginBottom: -20 }} onValueChange={setSkillLevel} value={skillLevel}>
          <RadioButton.Item label="Any" value="any" />
          <RadioButton.Item label="Beginner" value="beginner" />
          <RadioButton.Item label="Intermediate" value="intermediate" />
          <RadioButton.Item label="Advanced" value="advanced" />
        </RadioButton.Group>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1A508E',
  },
  filtersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -30,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1A508E',

  },
  distanceText: {
    fontSize: 14,
    color: '#1A508E',

  },
  filterButton: {
    flex: 1,
    padding: 2,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    fontSize: 5,
  },
  filterButtonText: {
    color: '#1A508E',
  },
  slider: {
    marginTop: 10,
    marginBottom: 20,
  },
  datePickerContainer: {
    marginTop: 20,
    marginBottom: -1,
    width: '100%',
    alignItems: "left-start",
    textAlign: 'left',
  },
});

export default FilterComponent;