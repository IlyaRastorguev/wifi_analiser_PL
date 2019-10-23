import axios from 'axios';
import { default as API } from './api'
import { default as Auth__API } from '../login-view/API'

function getLocations() {
    console.warn(Auth__API.getToken(Auth__API.auth));
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

export default {
    getLocations
}
