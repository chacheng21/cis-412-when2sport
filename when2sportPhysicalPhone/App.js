/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './src/screens/Homepage';
import CreateNewEventPage from './src/screens/CreateNewEventPage';
import ViewEventPage from './src/screens/ViewEventPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ 
        headerShown: false, cardStyle: { backgroundColor: '#E2EFFF'}
      }}>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="CreateNewEvent" component={CreateNewEventPage} />
        <Stack.Screen name="ViewEvent" component={ViewEventPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
