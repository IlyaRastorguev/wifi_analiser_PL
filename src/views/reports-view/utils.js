import axios from 'axios';
import { default as API } from './api'
import { default as Auth__API } from '../login-view/API'

function getReports(page, size) {
    return (callback) => axios({
        method: 'get',
        url: API.getReports(),
        header: {
            Authorization: `Bearer ${window[Auth__API.symbol]}`
        },
        data: {
            page,
            size
        }
    }).then((response)=> {
        callback(response)
    })
}

export default {
    getReports
}