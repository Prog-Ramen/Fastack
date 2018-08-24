const React = require('react-native');
const base64 = require('base-64');
const algorithm = 'aes-256-ctr';
var CryptoJS = require("crypto-js");
var async = require('async');
import {makeRepo, getPlan} from './githubRepo';


const {
    AsyncStorage,
} = React;

export var config = {
    GITHUB_CLIENT_ID: '442dbe2e6a65ceb60986',
    GITHUB_CLIENT_SECRET: '09dbd96778555bde134c32b1b7699016f39fc27c',
};

const AUTH_URL_PATH = 'https://api.github.com/authorizations';

function encrypt(text, password){
    return CryptoJS.AES.encrypt(text, password);
}

function decrypt(text, password){
    return CryptoJS.AES.decrypt(text, password).toString(CryptoJS.enc.Utf8);
}

export function login(name, pwd) {
    const bytes = name.trim() + ':' + pwd.trim();
    const encoded = base64.encode(bytes);

    return fetch(AUTH_URL_PATH, {
        method: 'POST',
        headers: {
            'Authorization' : 'Basic ' + encoded,
            'User-Agent': 'GitHub Issue Browser',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            'client_id': config.GITHUB_CLIENT_ID,
            'client_secret': config.GITHUB_CLIENT_SECRET,
            'scopes': ['user', 'repo'],
            'note': 'not abuse'
        })
    })
        .then((response) => {
            const isValid = response.status < 400;
            const body = response._bodyInit;
            return response.json().then((json) => {
                if (isValid) {
                    // getPlan(json.token).then((plan) => {
                    //     console.log(plan);
                    //     if (plan.hasOwnProperty('private_repos')){
                    //         if (plan.private_repos > 0){
                    //             // encrypted = encrypt("samarrrr", pwd).toString();
                    //             // console.log(decrypt(encrypted, pwd))
                    //             //makeRepo(json.token, true);
                    //             console.log(tokenHeader());
                    //         } else {
                    //             //makeRepo(json.token, false);
                    //         }
                    //     }
                    // });
                    config.token = json.token;
                    return "Login Successful"
                } else {
                    throw new Error(json.message);
                }
            });
        });
}


export function getConfig() {
    if (config.hasOwnProperty('token')) {
        return config;
    } else {
        return {result: "Not logged in."}
    }


}
