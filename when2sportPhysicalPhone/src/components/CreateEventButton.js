import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";

const CreateEventButton = ({ username, navigation }) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={
      () => {
        navigation.navigate('CreateNewEvent', { username })
      }
    }>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#ED4064',
    borderRadius: 35,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 60,
  },
})

export default CreateEventButton