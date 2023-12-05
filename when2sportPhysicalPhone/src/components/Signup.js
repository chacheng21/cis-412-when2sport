import React, { useState, useContext } from 'react';
import UsernameContext from '../constants/UsernameContext';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

const Signup = ({ route, navigation }) => {
  const { setUsername } = useContext(UsernameContext);

  const [curUsername, setCurUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    setUsername(curUsername)
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setCurUsername}
        value={curUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDEEFF', // Placeholder gradient color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1A508E',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#5577CC', // Placeholder button color
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Signup;