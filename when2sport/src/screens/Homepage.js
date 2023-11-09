import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FilterComponent from '../components/Homepage/FilterComponent'
import AvailableEvents from '../components/Homepage/AvailableEvents';
import UpcomingEvents from '../components/Homepage/UpcomingEvents';
import Header from '../components/Header';

const Homepage = ({ route, navigation }) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Header username="Kisha" />
            <FilterComponent />
            <UpcomingEvents navigation={navigation}/>
            <AvailableEvents navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Homepage;