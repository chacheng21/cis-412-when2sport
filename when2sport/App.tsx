/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import FilterComponent from './src/components/Homepage/FilterComponent'
import AvailableEvents from './src/components/Homepage/AvailableEvents';
import UpcomingEvents from './src/components/Homepage/UpcomingEvents';
import Header from './src/components/Header';
import NewEventForm from './src/components/CreateEvent/NewEventForm';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            {/* HOMEPAGE */}
            {/* <Header username="Kisha" />
            <FilterComponent />
            <UpcomingEvents />
            <AvailableEvents /> */}
            {/* CREATE EVENT PAGE */}
            <Header username="Kisha" />
            <NewEventForm />
            {/* VIEW EVENT PAGE */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
