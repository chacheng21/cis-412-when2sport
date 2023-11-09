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
  const { title, date, time, sport, skillLevel, location, capacity, attendees, isJoined, host } = route.params
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Header username="Kisha" />
            <EventDetails title={title} date={date} time={time}
              sport={sport} skillLevel={skillLevel} location={location} capacity={capacity} attendees={attendees}
              isJoined={isJoined} host={host} navigation={navigation}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default ViewEventPage;