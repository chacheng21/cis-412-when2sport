import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet, Button, TouchableOpacity, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from "@react-native-community/datetimepicker";

const NewEventForm = () => {
  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date(startTime.getTime() + 60 * 60 * 1000));
  const [sport, setSport] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [isSportPickerVisible, setSportPickerVisible] = useState(false);
  const [isSkillPickerVisible, setSkillPickerVisible] = useState(false);
  const [capacity, setCapacity] = useState('');
  const [location, setLocation] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const onDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  // Function to toggle sport picker modal
  const toggleSportPicker = () => {
    setSportPickerVisible(!isSportPickerVisible);
  };

  // Function to toggle skill picker modal
  const toggleSkillPicker = () => {
    setSkillPickerVisible(!isSkillPickerVisible);
  };

  const submitForm = () => {
    // Logic to submit the form, e.g., save to a backend
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.eventTitleInput}
          placeholder="Event Title"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}> Date: </Text>
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={onDateChange}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}> Time: </Text>
        <View style={styles.timeContainer}>
          <DateTimePicker
            value={startTime}
            mode={'time'}
            display="default"
            onChange={(event, selectedTime) => {
              if (selectedTime) setStartTime(selectedTime);
            }}
          />
          <Text> - </Text>
          <DateTimePicker
            value={endTime}
            mode={'time'}
            display="default"
            onChange={(event, selectedTime) => {
              if (selectedTime) setEndTime(selectedTime);
            }}
          />
        </View>
      </View>
      
      <View style={styles.row}>
        <Text style={styles.label}> Sport: </Text>
        <TouchableOpacity style={styles.input} onPress={toggleSportPicker}>
          <Text style={styles.pickerText}>{sport || 'Select Sport'}</Text>
        </TouchableOpacity>
        <Modal
          visible={isSportPickerVisible}
          onRequestClose={toggleSportPicker}
          transparent={true}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Picker
                selectedValue={sport}
                onValueChange={(itemValue) => {
                  setSport(itemValue);
                  toggleSportPicker();
                }}
                style={{ width: '100%' }}
              >
                <Picker.Item label="All Sports" value="All Sports" />
                <Picker.Item label="Football" value="Football" />
                <Picker.Item label="Basketball" value="Basketball" />
                <Picker.Item label="Tennis" value="Tennis" />
                <Picker.Item label="Volleyball" value="Volleyball" />
                {/* ... other sports ... */}
              </Picker>
              <Button title="Done" onPress={toggleSportPicker} />
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}> Skill Level: </Text>
        <TouchableOpacity style={styles.input} onPress={toggleSkillPicker}>
          <Text style={styles.pickerText}>{skillLevel || 'Select Skill Level'}</Text>
        </TouchableOpacity>
        <Modal
          visible={isSkillPickerVisible}
          onRequestClose={toggleSkillPicker}
          transparent={true}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Picker
                selectedValue={skillLevel}
                onValueChange={(itemValue) => {
                  setSkillLevel(itemValue);
                  toggleSkillPicker();
                }}
                style={{ width: '100%' }}
              >
                <Picker.Item label="Any" value="any" />
                <Picker.Item label="Beginner" value="Beginner" />
                <Picker.Item label="Intermediate" value="Intermediate" />
                <Picker.Item label="Advanced" value="Advanced" />
                {/* ... other skill levels ... */}
              </Picker>
              <Button title="Done" onPress={toggleSkillPicker} />
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}> Capacity: </Text>
        <TextInput
          style={styles.input}
          placeholder="Capacity"
          value={capacity}
          onChangeText={setCapacity}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}> Location: </Text>
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <View style={styles.row}>
        <View style={styles.switchContainer}>
          <Text style={styles.label}> Privacy: </Text>
          <Switch
            value={isPrivate}
            onValueChange={(newValue) => setIsPrivate(newValue)}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.publishButton} onPress={submitForm}>
          <Text style={styles.publishButtonText}>Publish</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeInput: {
    width: '45%', // This can be adjusted as needed
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  skillContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%', // Adjust as needed
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1, // takes 1/3 of the space
    fontSize: 16, // Adjust the size as necessary
  },
  input: {
    flex: 2, // takes 2/3 of the space
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  // Add additional styles for switch, buttonContainer, etc.
  switch: {
    // If needed, style for the switch
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  cancelButton: {
    // If the Cancel and Save buttons should look similar, give them the same style
    backgroundColor: '#f0f0f0', // Adjust color accordingly
    padding: 10,
    borderRadius: 5,
    flexGrow: 1, // buttons will share the space
    left: -15,
    marginHorizontal: 5, // Add horizontal margin for spacing between the buttons
  },
  saveButton: {
    // Same style as cancelButton if they look the same
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    flexGrow: 1,
    marginHorizontal: 5,
  },
  publishButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    flexGrow: 1,
    left: 15,
    marginHorizontal: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  publishButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  pickerText: {
    fontSize: 16,
    color: '#000', 
    paddingLeft: 0,
    paddingTop: 10,  
    alignSelf: 'flex-start', 
  },
  eventTitleInput: {
    height: 50, // Set a fixed height for the input
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    marginTop: -10,
    fontSize: 20, // Larger font size
    fontWeight: 'bold', // Bold font weight
    textAlign: 'center', // Center-align the text horizontally
    width: '100%', // Ensure the input takes up the full width available
    alignSelf: 'center', // Center-align the input field itself
  },
});

export default NewEventForm;