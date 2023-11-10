import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {props.username}</Text>
      <Text style={styles.title}>When2Sport</Text>
      <TouchableOpacity onPress={() => { }}>
        <Image source={require("../assets/icons/person-circle.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6F9BD1',
    borderRadius: 10,
    top: -15,
    height: 130,  // Adjust this height if necessary
  },
  welcomeText: {
    fontSize: 18,
    color: 'white',
    position: 'absolute', // Make it an absolute positioned element
    top: 40,  // Adjust top and left to position the text as needed
    left: 20,
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 30
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 12.5,
    position: 'absolute',
    top: -50,
    left: 330,
  },
});

export default Header;
