import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { useUpcomingEvents } from "../../constants/UpcomingEventsContext";
import { useAvailableEvents } from "../../constants/AvailableEventsContext";

const iconMap = {
  calendar: require('../../assets/iconMap/calendar.png'),
  clock: require('../../assets/iconMap/clock.png'),
  Tennis: require('../../assets/iconMap/Tennis.png'),
  Soccer: require('../../assets/iconMap/Soccer.png'),
  Volleyball: require('../../assets/iconMap/Volleyball.png'),
  Beginner: require('../../assets/iconMap/easy.png'),
  Intermediate: require('../../assets/iconMap/medium.png'),
  Advanced: require('../../assets/iconMap/hard.png'),
  location: require('../../assets/iconMap/map-marker.png'),
};

const { width: screenWidth } = Dimensions.get('window');
const desiredMargin = 45; // Set the desired margin size
const itemWidth = (screenWidth - 2 * desiredMargin) / 4;


const attendeesList = (attendees, capacity) => {
  let attendeeList = []
  for (let i = 0; i < attendees.length; i++) {
    attendeeList.push(true)
  }
  for (let i = 0; i < (capacity - attendees.length); i++) {
    attendeeList.push(false)
  }

  return attendeeList
}

const sortEventsChronologically = (events) => {
  return events.sort((a, b) => {
    // Combine date and startTime into a full datetime string
    const dateTimeA = new Date(`${a.date} ${a.startTime}`);
    const dateTimeB = new Date(`${b.date} ${b.startTime}`);

    // Compare the datetime objects
    return dateTimeA - dateTimeB;
  });
}

const EventDetails = ({ title, date, startTime, endTime, sport, skillLevel, location, capacity, attendees, host, navigation, username, privacy, id }) => {
  const getAttendeesList = attendeesList(attendees, capacity)
  const isJoined = attendees.includes(username)
  const { upcomingEvents, setUpcomingEvents } = useUpcomingEvents()
  const { availableEvents, setAvailableEvents } = useAvailableEvents()
  const data = { title, date, startTime, endTime, sport, skillLevel, location, capacity, attendees, host, navigation, privacy, id }

  const leaveEvent = () => {
    const newUpcomingEvents = upcomingEvents.filter(event => event.id !== id);

    const newAvailableEvents = [...availableEvents]
    const toRemoveUserIndex = data.attendees.indexOf(username)
    data.attendees.splice(toRemoveUserIndex, 1)
    newAvailableEvents.push(data)

    setUpcomingEvents(newUpcomingEvents)
    setAvailableEvents(newAvailableEvents)
  }

  const joinEvent = () => {
    const newAvailableEvents = availableEvents.filter(event => event.id !== id);

    const newUpcomingEvents = [...upcomingEvents]
    data.attendees.push(username)
    newUpcomingEvents.push(data)

    setAvailableEvents(newAvailableEvents)
    setUpcomingEvents(newUpcomingEvents)
  }

  return (
    <>
      {/* Title and Back Button */}
      <View style={styles.header}>
        {/* onPress={onBackPress} */}
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress = {() => navigation.navigate("Home")}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      {/* Event Detail Card */}
      <View style={styles.cardContainer}>
        <View style={styles.row}>
          <Image source={iconMap.calendar} style={styles.icon} />
          <Text style={styles.text}>{date}</Text>
        </View>
        <View style={styles.row}>
          <Image source={iconMap.clock} style={styles.icon} />
          <Text style={styles.text}>{`${startTime} - ${endTime}`}</Text>
        </View>
        <View style={styles.row}>
          <Image source={iconMap[sport]} style={styles.icon} />
          <Text style={styles.text}>{sport}</Text>
        </View>
        <View style={styles.row}>
          <Image source={iconMap[skillLevel]} style={styles.icon} />
          <Text style={styles.text}>{skillLevel}</Text>
        </View>
        <View style={styles.row}>
          <Image source={iconMap.location} style={styles.icon} />
          <Text style={styles.text}>{location}</Text>
        </View>
      </View>
      {/* Attendee List */}
      <FlatList
        data={getAttendeesList}
        renderItem={({ item }) => (
          <View style={{ width: itemWidth }}>
            {item ? (
              <Image source={require("../../assets/iconMap/person-circle.png")} style={styles.attendIcon} />
            ) : (
              <View style={styles.emptyIcon} />
            )}
          </View>
        )}
        keyExtractor={(item, index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0, width: 300, left: 55 }} // Prevents the FlatList from stretching
      />
      {/* Join */}
      {!isJoined ? (
          <TouchableOpacity style={styles.joinButton} onPress={() => joinEvent()}>
            <Text style={styles.joinButtonText}>Join</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.leaveButton} onPress={() => leaveEvent()}>
            <Text style={styles.leaveButtonText}>Leave</Text>
          </TouchableOpacity>
        )
      }
    </>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flex: 1,
    left: 70,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    alignItems: 'center', // Center-align items for each row
    justifyContent: 'center', // Center-align items vertically in the container
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: 250,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', // Center-align items within the row
    marginVertical: 14, // Add vertical margin between rows
  },
  icon: {
    width: 20, // Set the width of the icon
    height: 20, // Set the height of the icon
    marginRight: 5, // Add some margin to the right of the icon
  },
  text: {
    textAlign: 'center', // Center-align the text
    fontSize: 18,
    // Add additional text styling as needed
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center content horizontally
    padding: 16,
    // Remove 'position' and 'left' from the backButton style if present
  },
  backButton: {
    position: 'absolute',
    left: 30, // Distance from the left edge of the card
  },
  backButtonText: {
    fontSize: 24, // Adjust the size as needed
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center', // Align text to center
    flex: 1, // Take up available space
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 40,
    left: 70,
  },
  attendIcon: {
    width: 50,
    height: 50,
    borderRadius: 12.5,
    marginRight: 10,
  },
  emptyIcon: {
    width: 45,
    height: 45,
    borderRadius: 30,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 3,
    backgroundColor: "#e0e0e0", // Placeholder color
  },
  joinButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    flexGrow: 1,
    left: 140,
    marginTop: 40,
    marginHorizontal: 5,
    width: 100,
  },
  joinButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  leaveButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flexGrow: 1,
    left: 140,
    marginTop: 40,
    marginHorizontal: 5,
    width: 100,
    borderColor: 'red',
    borderWidth: 1,
  },
  leaveButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
});

export default EventDetails;