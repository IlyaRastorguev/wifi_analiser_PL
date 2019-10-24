import axios from 'axios';
import { default as API } from './api'
import { default as Auth__API } from '../login-view/API'

function getLocations() {
    return (callback) => axios({
        method: 'get',
        url: API.getLocations(),
        headers: {
            'Authorization': `Bearer ${Auth__API.getToken(Auth__API.auth)}`
        }
    }).then((response)=> {
        response && callback(response.data)
    })
}

function addLocation(name) {

    return (callback) => axios({
        method: 'post',
        url: `${API.getLocations()}`,
        headers: {
            Authorization: `Bearer ${Auth__API.getToken(Auth__API.auth)}`
        },
        data: {
            name
        }
    }).then((response)=> {
        callback(response)
    })
}

export default {
    getLocations,
    addLocation
}
