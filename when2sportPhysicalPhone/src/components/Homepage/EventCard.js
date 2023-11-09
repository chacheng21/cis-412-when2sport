import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { useUpcomingEvents } from "../../constants/UpcomingEventsContext";
import { useAvailableEvents } from "../../constants/AvailableEventsContext";

const iconMap = {
  Tennis: require('../../assets/icons/Tennis.png'),
  Soccer: require('../../assets/icons/Soccer.png'),
  Beginner: require('../../assets/icons/easy.png'),
  Intermediate: require('../../assets/icons/medium.png'),
  Advanced: require('../../assets/icons/hard.png'),
};

const sortEventsChronologically = (events) => {
  return events.sort((a, b) => {
    // Combine date and startTime into a full datetime string
    const dateTimeA = new Date(`${a.date} ${a.startTime}`);
    const dateTimeB = new Date(`${b.date} ${b.startTime}`);

    // Compare the datetime objects
    return dateTimeA - dateTimeB;
  });
}

const EventCard = ({ username, title, date, startTime, endTime, sport, skillLevel, location, capacity, attendees, host, navigation, privacy }) => {
  const { upcomingEvents, setUpcomingEvents } = useUpcomingEvents()
  const { availableEvents, setAvailableEvents } = useAvailableEvents()
  const data = { title, date, startTime, endTime, sport, skillLevel, location, capacity, attendees, host, navigation, privacy }

  const leaveEvent = () => {
    let newUpcomingEvents = [...upcomingEvents]
    const toRemoveIndex = newUpcomingEvents.indexOf(data)
    newUpcomingEvents.splice(toRemoveIndex, 1)
    newUpcomingEvents = sortEventsChronologically(newUpcomingEvents)

    let newAvailableEvents = [...availableEvents]
    const toRemoveUserIndex = data.attendees.indexOf(username)
    data.attendees.splice(toRemoveUserIndex, 1)
    newAvailableEvents.push(data)
    newAvailableEvents = sortEventsChronologically(newAvailableEvents)

    setUpcomingEvents(newUpcomingEvents)
    setAvailableEvents(newAvailableEvents)
  }

  const joinEvent = () => {
    let newAvailableEvents = [...availableEvents]
    const toRemoveIndex = newAvailableEvents.indexOf(data)
    newAvailableEvents.splice(toRemoveIndex, 1)
    newAvailableEvents = sortEventsChronologically(newAvailableEvents)

    let newUpcomingEvents = [...upcomingEvents]
    data.attendees.push(username)
    newUpcomingEvents.push(data)
    newUpcomingEvents = sortEventsChronologically(newUpcomingEvents)

    setAvailableEvents(newAvailableEvents)
    setUpcomingEvents(newUpcomingEvents)
  }

  const handlePress = (title, date, startTime, endTime, sport, skillLevel, location, capacity, attendees, host, username, privacy) => {
    navigation.navigate("ViewEvent", { title, date, startTime, endTime, sport, skillLevel, location, capacity, attendees, host, username, privacy })
  }

  const isJoined = attendees.includes(username)
  
  return (
    <TouchableOpacity onPress = {() => handlePress(title, date, startTime, endTime, sport, skillLevel, location, capacity, attendees, host, username)}>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.header}>
            {/* Sport Image Icon */}
            <Image
              resizeMode="contain"
              source={iconMap[sport]}
              style={styles.logo}
            />
            {/* Join Leave Button */}
            <Text style={styles.name}>{host}</Text>
            {!isJoined ? (
              <TouchableOpacity style={styles.joinButton} onPress={() => joinEvent()}>
                <Text style={styles.joinText}>Join</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.leaveButton} onPress={() => leaveEvent()}>
                <Text style={styles.leaveText}>Leave</Text>
              </TouchableOpacity>
            )
            }
          </View>
          {/* Skill Level */}
          <View style={styles.difficultyContainer}>
            <Image
              source={iconMap[skillLevel]}
              style={styles.difficultyIcon}
            />
          </View>
          {/* Event Title */}
          <Text style={styles.eventTitle}>{title}</Text>
          {/* Event Location */}
          <Text style={styles.location}>{`@ ${location}`}</Text>
          {/* Attendees */}
          {isJoined ? (
            <Text style={styles.attendees}>{`${attendees.length} Attendees`}</Text>
          ) : (
            <Text style={styles.attendees}>{`${capacity - attendees.length} Spots Remaining`}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    padding: 10,
    width: 280,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 25,
    height: 25,
  },
  name: {
    fontSize: 16,
    color: "#000",
    flex: 1,
    marginLeft: 10,
  },
  joinButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 5,
  },
  joinText: {
    color: 'white',
  },
  leaveButton: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
    padding: 5,
  },
  leaveText: {
    color: "red",
  },
  eventTitle: {
    fontSize: 18,
    color: "#000",
    marginTop: 10,
  },
  location: {
    fontSize: 14,
    color: "#6F9BD1",
    marginTop: 5,
  },
  attendees: {
    fontSize: 14,
    color: "black",
    marginTop: 5,
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  emptyIcon: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: "#e0e0e0", // Placeholder color
  },
  upperContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  difficultyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 40,  // adjust as needed
    right: -7,  // adjust as needed
  },
  difficultyIcon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  difficultyText: {
    fontSize: 14,
    color: "#000",
  },
});

export default EventCard;