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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FilterComponent from './src/components/Homepage/FilterComponent'
import AvailableEvents from './src/components/Homepage/AvailableEvents';
import UpcomingEvents from './src/components/Homepage/UpcomingEvents';
import Header from './src/components/Header';
import NewEventForm from './src/components/CreateEvent/NewEventForm';
import EventDetails from './src/components/ViewEvent/EventDetails';

import Homepage from './src/screens/Homepage';
import CreateNewEventPage from './src/screens/CreateNewEventPage';
import ViewEventPage from './src/screens/ViewEventPage';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="CreateNewEvent" component={CreateNewEventPage} />
        <Stack.Screen name="ViewEvent" component={ViewEventPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
