import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import Login from './app/components/Login.js';
import Stack from './app/components/Stack.js';


import {
    StackNavigator,
} from 'react-navigation';

const Navigator = StackNavigator({
    Login: {
        screen: Login
    },
    Stack: {
        screen: Stack
    }}, {
    headerMode: 'none',
    cardStyle: {
        backgroundColor: 'transparent'
    },
    transitionConfig: () => ({
        containerStyle: {
            backgroundColor: 'transparent',
        }
    }),
});
export default class App extends React.Component {
  static navigationOptions = {
      header: null,
      title: 'Welcome',
  };
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    )
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 60,
    paddingRight: 60,
  }
})

