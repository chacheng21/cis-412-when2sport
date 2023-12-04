/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/components/Signup';
import Homepage from './src/screens/Homepage';
import CreateNewEventPage from './src/screens/CreateNewEventPage';
import ViewEventPage from './src/screens/ViewEventPage';
import { UpcomingEventsProvider } from './src/constants/UpcomingEventsContext';
import { AvailableEventsProvider } from './src/constants/AvailableEventsContext';
import UsernameContext from './src/constants/UsernameContext';

const Stack = createNativeStackNavigator();

function App() {
  const [ username, setUsername ] = useState('')

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      <AvailableEventsProvider>
        <UpcomingEventsProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Signup" screenOptions={{
              headerShown: false, cardStyle: { backgroundColor: '#E2EFFF' }
            }}>
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Home" component={Homepage} />
              <Stack.Screen name="CreateNewEvent" component={CreateNewEventPage} />
              <Stack.Screen name="ViewEvent" component={ViewEventPage} />
            </Stack.Navigator>
          </NavigationContainer>
        </UpcomingEventsProvider>
      </AvailableEventsProvider>
    </UsernameContext.Provider>
  );
}

export default App;
