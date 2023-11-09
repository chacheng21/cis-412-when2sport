import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EventDetails from '../components/ViewEvent/EventDetails';
import Header from '../components/Header';

const ViewEventPage = ({ route, navigation }) => {
  const { username, title, date, startTime, endTime, sport, skillLevel, location, capacity, attendees, host } = route.params
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Header username={username} />
            <EventDetails username={username} title={title} date={date} startTime={startTime} endTime={endTime}
              sport={sport} skillLevel={skillLevel} location={location} capacity={capacity} attendees={attendees}
              host={host} navigation={navigation}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default ViewEventPage;