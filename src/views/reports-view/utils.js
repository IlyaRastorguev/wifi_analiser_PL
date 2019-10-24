import axios from 'axios';
import { default as API } from './api'
import { default as Auth__API } from '../login-view/API'
import {dangerColor, hexToRgb, successColor, warningColor} from "../../components/connon-styles";

function getReports(locationId, page, size) {
    return (callback) => axios({
        method: 'get',
        url: API.reports(),
        headers: {
            'Authorization': `Bearer ${Auth__API.getToken(Auth__API.auth)}`,
            'Access-Control-Allow-Origin': `http://localhost:3000`
        },
        withCredentials: true,
        params: {
            locationId,
            page,
            size,
        }
    }).then((response)=> {
        callback(response.data)
    })
}

function deleteReport(id) {
    return (callback) => axios({
        method: 'delete',
        url: `${API.reports()}/${id}`,
        headers: {
            'Authorization': `Bearer ${Auth__API.getToken(Auth__API.auth)}`,
            'Access-Control-Allow-Origin': `http://localhost:3000`
        },
        withCredentials: true
    }).then(()=> {
        callback()
    })
}

function signalLevelConverter(level) {
    switch (level) {
        case "NORMAL":
            return 'приемлемый';
        case "GOOD":
            return 'хороший';
        case "EXCELLENT":
            return 'отличный';
        case "BAD":
            return 'неприемлемый';

    }
}

export default {
    getReports,
    deleteReport,
    signalLevelConverter
}
