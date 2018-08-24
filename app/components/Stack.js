import React from 'react';
import stylesheet from '../stylesheets/LoginStyle.js';
import {login} from './githubLogin';

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
var TOKEN = "";

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

export default class Stack extends React.Component {
    state = {
        login: false,
    };
    _handleSubmit = () => {
        const value = this._form.getValue();
        login(value['email'], value['password']).then((token) => {
            TOKEN = token;
            console.log(TOKEN);
            this.setState({ login: true });
        });
    };
    render() {
        return (
            <View style={styles.regForm}>
                <Text style={styles.appName}>  FaStack  </Text>
                <Text style={styles.header}> Login with Github </Text>
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