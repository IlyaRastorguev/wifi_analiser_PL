import React from 'react'
import axios from 'axios'

import { default as API } from './API'

function inputHandler(event, regexp) {
    if (event && event.target && event.target.value) {
        return {
            value: event.target.value,
            isValid: regexp ? event.target.value.match(regexp) : true
        }
    }

    return {
        value: '',
        isValid: false
    }
}


function saveToken(token, key) {
   API.setTokens(key, token)
}

function refreshToken(time, usrn, pass) {
    setInterval(() => {
        Refresh(usrn, pass)
    }, time)
}

function checkAuth() {
    return !API.getToken(API.auth)
}

function Auth (username, pass) {
    return (callBack) => axios({
        method: 'post',
        url: API.OAuth(),
        head: {
            'Access-Control-Allow-Origin': `http://localhost:3000`
        },
        auth: {
            username: 'web',
            password: `${pass}`
        },
        withCredentials: true,
        params: {
            username: username,
            password: pass,
            scope: 'read write',
            grant_type: 'password'
        }
    }).then(function (response) {
        saveToken(response.data['access_token'], API.auth);
        saveToken(response.data['refresh_token'], API.refresh);
        callBack()
    })
}

function Refresh (username, pass) {
    return (callBack) => axios({
        method: 'post',
        url: API.OAuth(),
        headers: {
            Authorization: `Basic ${btoa(`${username}:${pass}`)}`
        },
        params: {
            refresh_token: window[API.refresh],
            grant_type: 'refresh_token'
        }
    }).then(function (response) {
        saveToken(response['access_token'], API.auth);
        saveToken(response['refresh_token'], API.auth);
        refreshToken(response['expires_in'], username, pass);
        callBack()
    })
}

export default {
    Auth,
    inputHandler,
    checkAuth
}
