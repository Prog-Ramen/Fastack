import React from 'react';
import octokit from '@octokit/rest';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default class Registration extends React.Component {
  render() {
    return (
      <View style={styles.regForm}>
        <Text style={styles.header}> Login </Text>
        <TextInput style={styles.textinput} placeholder="Github Username" placeholderTextColor="#fff" underlineColorAndroid={'transparent'} />
        <TextInput style={styles.textinput} placeholder="Github Password" placeholderTextColor="#fff" underlineColorAndroid={'transparent'} secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  regForm: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  }
})

