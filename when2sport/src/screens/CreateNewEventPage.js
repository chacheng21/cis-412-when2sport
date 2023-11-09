import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewEventForm from '../components/CreateEvent/NewEventForm';
import Header from '../components/Header';

const CreateNewEventPage = ({ route, navigation }) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Header username="Kisha" />
            <NewEventForm navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default CreateNewEventPage;