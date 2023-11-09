import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewEventForm from '../components/CreateEvent/NewEventForm';
import Header from '../components/Header';

const CreateNewEventPage = ({ navigation, route }) => {
  const {username } = route.params
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Header username={username} />
            <NewEventForm navigation={navigation} route={route} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

// Add styles here
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E2EFFF',
  },
});

export default CreateNewEventPage;