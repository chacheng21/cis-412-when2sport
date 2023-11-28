import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import React, { createContext, useContext, useState } from "react";

import FilterComponent from '../components/Homepage/FilterComponent'
import AvailableEvents from '../components/Homepage/AvailableEvents';
import UpcomingEvents from '../components/Homepage/UpcomingEvents';
import Header from '../components/Header';
import CreateEventButton from '../components/CreateEventButton';

const Homepage = ({ route, navigation }) => {
  const username = "Kisha"

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.container}>
          <Header username={username} />
          <FilterComponent />
          <UpcomingEvents username={username} navigation={navigation} />
          <AvailableEvents username={username} navigation={navigation} />
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
});

export default Homepage;
