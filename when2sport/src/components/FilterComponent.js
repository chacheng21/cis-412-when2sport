import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import DateTimePicker from '@react-native-community/datetimepicker';

function FilterComponent(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [sport, setSport] = useState('');
  const [skillLevel, setSkillLevel] = useState('any');
  const [distance, setDistance] = useState(0);
  const [activeFilter, setActiveFilter] = useState(''); // To track which filter is active

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Filter By</Text>
        <View style={styles.filtersRow}>
          <TouchableOpacity style={styles.filterButton} onPress={() => setActiveFilter(activeFilter === 'time' ? '' : 'time')}>
            <Text>Time</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} onPress={() => setActiveFilter(activeFilter === 'sport' ? '' : 'sport')}>
            <Text>Sport</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} onPress={() => setActiveFilter(activeFilter === 'skill' ? '' : 'skill')}>
            <Text>Skill Level</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} onPress={() => setActiveFilter(activeFilter === 'location' ? '' : 'location')}>
            <Text>Location </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Time Filter */}
      {activeFilter === 'time' &&
        <>
          <TouchableOpacity onPress={() => setShowStartPicker(true)}>
            <Text>Start: {startDate.toLocaleString()}</Text>
          </TouchableOpacity>
          {showStartPicker && (
            <DateTimePicker
              value={startDate}
              mode={'datetime'}
              display="default"
              onChange={(event, selectedDate) => {
                setShowStartPicker(false);
                if (selectedDate) setStartDate(selectedDate);
              }}
            />
          )}

          <TouchableOpacity onPress={() => setShowEndPicker(true)}>
            <Text>End: {endDate.toLocaleString()}</Text>
          </TouchableOpacity>
          {showEndPicker && (
            <DateTimePicker
              value={endDate}
              mode={'datetime'}
              display="default"
              onChange={(event, selectedDate) => {
                setShowEndPicker(false);
                if (selectedDate) setEndDate(selectedDate);
              }}
            />
          )}
        </>
      }

      {activeFilter === 'sport' &&
        <Picker selectedValue={sport} onValueChange={setSport}>
          <Picker.Item label="All Sports" value="" />
          <Picker.Item label="Football" value="football" />
          <Picker.Item label="Basketball" value="basketball" />
          <Picker.Item label="Tennis" value="tennis" />
          {/* Add more sports options if needed */}
        </Picker>
      }

      {activeFilter === 'skill' &&
        <RadioButton.Group onValueChange={setSkillLevel} value={skillLevel}>
          <RadioButton.Item label="Any" value="any" />
          <RadioButton.Item label="Beginner" value="beginner" />
          <RadioButton.Item label="Intermediate" value="intermediate" />
          <RadioButton.Item label="Advanced" value="advanced" />
        </RadioButton.Group>
      }

      {activeFilter === 'location' &&
        <View>
          <Text style={styles.distanceText}>Distance: {distance} km</Text>
          <Slider
            style={styles.slider}
            value={distance}
            onValueChange={setDistance}
            minimumValue={0}
            maximumValue={100}
            step={1}
          />
        </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filtersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
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
  slider: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default FilterComponent;