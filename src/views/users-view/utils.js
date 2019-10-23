import axios from "axios";
import API from './api'
import Auth__API from '../login-view/API'

function getUsersList() {
    return (callback) => axios({
        method: 'get',
        url: API.getList(),
        headers: {
            Authorization: `Bearer ${Auth__API.getToken(Auth__API.auth)}`
        }
    }).then((response)=> {
        response && callback(response.data)
    })
}

function getMe() {
    return (callback) => axios({
        method: 'get',
        url: API.getMe(),
        headers: {
            Authorization: `Bearer ${Auth__API.getToken(Auth__API.auth)}`
        }
    }).then((response)=> {
        callback(response.data)
    })
}

function deleteUser(id) {

    return (callback) => axios({
        method: 'delete',
        url: `${API.getList()}/${id}`,
        headers: {
            Authorization: `Bearer ${Auth__API.getToken(Auth__API.auth)}`
        }
    }).then((response)=> {
        callback(response)
    })
}

export default {
    getUsersList,
    getMe,
    deleteUser
}
