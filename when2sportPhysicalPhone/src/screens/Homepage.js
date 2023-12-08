import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import React, { createContext, useContext, useState } from "react";
import UsernameContext from '../constants/UsernameContext';
import FilterComponent from '../components/Homepage/FilterComponent'
import AvailableEvents from '../components/Homepage/AvailableEvents';
import UpcomingEvents from '../components/Homepage/UpcomingEvents';
import Header from '../components/Header';
import CreateEventButton from '../components/CreateEventButton';

const Homepage = ({ route, navigation }) => {
  const { username } = useContext(UsernameContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sport, setSport] = useState('all');
  const [skillLevel, setSkillLevel] = useState('any');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.container}>
          <Header username={username} />
          <UpcomingEvents username={username} navigation={navigation} />
          <FilterComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate}
            sport={sport} setSport={setSport}
            skillLevel={skillLevel} setSkillLevel={setSkillLevel}
          />
          <View style={styles.separator} />
          <AvailableEvents selectedDate={selectedDate} sport={sport} skillLevel={skillLevel}  username={username} navigation={navigation} />
        </View>
      </ScrollView>
      <View style={styles.createEventButtonContainer}>
        <CreateEventButton username={username} navigation={navigation}/> 
      </View>
    </SafeAreaView>
  );
}

// Add styles here
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E2EFFF', 
  },
  createEventButtonContainer: {
    position: 'absolute',
    right: 20, // adjust as needed
    bottom: 30, // adjust as needed
  },
  separator: {
    height: 1, // Height of the separator line
    width: 350, // Width of the separator line
    backgroundColor: '#2E68AA', // Color of the separator line
    alignSelf: 'center',
  },
});

export default Homepage;
