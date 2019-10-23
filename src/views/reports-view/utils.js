import axios from 'axios';
import { default as API } from './api'
import { default as Auth__API } from '../login-view/API'

function getReports(page, size) {
    return (callback) => axios({
        method: 'get',
        url: API.reports(),
        headers: {
            'Authorization': `Bearer ${Auth__API.getToken(Auth__API.auth)}`,
            'Access-Control-Allow-Origin': `http://localhost:3000`
        },
        withCredentials: true,
        params: {
            page,
            size
        }
    }).then((response)=> {
        callback(response.data)
    })
}

function deleteReport(id) {
    return (callback) => axios({
        method: 'delete',
        url: `${API.reports()}/${id}`,
        header: {
            'Authorization': `Bearer ${Auth__API.getToken(Auth__API.auth)}`,
            'Access-Control-Allow-Origin': `http://localhost:3000`
        },
        withCredentials: true
    }).then(()=> {
        callback()
    })
}

export default {
    getReports,
    deleteReport
}
