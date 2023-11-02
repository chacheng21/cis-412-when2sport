import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

function EventCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.header}>
          <Image
            resizeMode="contain"
            source={require("../../assets/icons/tennis-ball.png")} // Replace with your tennis ball image URL
            style={styles.logo}
          />
          <Text style={styles.name}>Charles Cheng</Text>
          <TouchableOpacity style={styles.leaveButton} onPress={() => { }}>
            <Text style={styles.leaveText}>Leave</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.difficultyContainer}>
          <Image
            source={require("../../assets/icons/easy.png")}
            style={styles.difficultyIcon}
          />
        </View>
        <Text style={styles.eventTitle}>Tennis Doubles</Text>
        <Text style={styles.location}>@ Penn Tennis Center</Text>
        <View style={styles.imagesContainer}>
          <Image source={require("../../assets/icons/person-circle.png")} style={styles.icon} />
          <Image source={require("../../assets/icons/person-circle.png")} style={styles.icon} />
          <Image source={require("../../assets/icons/person-circle.png")} style={styles.icon} />
          <View style={styles.emptyIcon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    padding: 10,
    width: 250,
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
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 10,
  },
  emptyIcon: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 10,
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