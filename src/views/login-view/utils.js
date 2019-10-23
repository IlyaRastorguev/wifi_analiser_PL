import axios from 'axios'

import { default as API } from './API'

function inputHandler(event, regexp) {
    if (event && event.target && event.target.value) {
        return {
            value: event.target.value,
            isValid: regexp ? event.target.value.match(regexp) : true
        }
    }
}


function saveToken(token, key) {
    window[key] = token
}

function refreshToken(time, usrn, pass) {
    setInterval(() => {
        Refresh(usrn, pass)
    }, time)
}

function Auth (username, pass, role) {

    return (callBack) => axios({
        method: 'post',
        url: API.OAuth(),
        data: {
            username: username,
            password: pass,
            scope: role,
            grant_type: 'password'
        }
    }).then(function (response) {
        saveToken(response['access_token'], API.auth);
        saveToken(response['refresh_token'], API.auth);
        callBack()
    })
}

function Refresh (username, pass) {

    return (callBack) => axios({
        method: 'post',
        url: API.OAuth(),
        header: {
            Authorization: `Basic ${btoa(`${username}:${pass}`)}`
        },
        data: {
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
    inputHandler
}