import React from 'react';
const octokit = require('@octokit/rest')
console.log(octokit)
import stylesheet from '../stylesheets/RegistrationStyle.js';
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text
} from 'react-native'
import t from 'tcomb-form-native';
var LABEL_COLOR = "#000000";
var INPUT_COLOR = "#ffffff";
var ERROR_COLOR = "#a94442";
var HELP_COLOR = "#999999";
var BORDER_COLOR = "#cccccc";
var DISABLED_COLOR = "#777777";
var DISABLED_BACKGROUND_COLOR = "#eeeeee";
var FONT_SIZE = 17;
var FONT_WEIGHT = "500";

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    password: t.String
});

const options = {
  fields: {
      email: {
          error: 'You require a github email adress to continue.',
          placeholder: 'Email',
          placeholderTextColor: INPUT_COLOR
      },
      password: {
          error: 'You require a github password to continue.',
          placeholder: 'Password',
          placeholderTextColor: INPUT_COLOR
      }
  },
  stylesheet: stylesheet,
};

export default class Registration extends React.Component {
  fetchProjects() {
      octokit.repos.getForUser({username: 'gilmoregrills', type: 'owner', sort: 'pushed'})
          .then(result => {
              console.log(result.data)
              this.setState({projects: result.data})
          })
  }
  _handleSubmit = () => {
      const value = this._form.getValue();
      console.log('value: ', value['email']);
      this.fetchProjects()
  };
  render() {
    return (
      <View style={styles.regForm}>
          <Text style={styles.appName}>  FaStack  </Text>
          <Text style={styles.header}> Login with Github </Text>
          <Form type={User} options={options} ref={c => this._form = c} />
          <TouchableOpacity style={styles.button} onPress={this._handleSubmit}>
              <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  regForm: {
    alignSelf: 'stretch',
  },
  appName: {
      alignSelf: 'center',
      fontSize: 48,
      color: '#fff',
      paddingBottom: 10,
      marginBottom: 40
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: "#59cbbd",
    marginTop: 30
  },
  btntext: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
});