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
    backgroundColor: 'red',
    borderRadius: 40,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 60,
  },
})

export default CreateEventButton