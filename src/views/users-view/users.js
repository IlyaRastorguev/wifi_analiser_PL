import React, {useState, useEffect} from 'react'
import MaterialTable from "../../components/table/table";
import { makeStyles } from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";
import utils from './utils'

import styles from './style'

const useStyle = makeStyles(styles);

const HEADERS = [
    'Дата регистрации',
    'Логин',
    'Статус',
    'Список ролей'
];

const convertUser = (user) => {
    if (!user) return [];

    const {
        creationDate,
        login,
        enabled,
        authorities
    } = user;

    return [
        creationDate,
        login,
        enabled ? 'Активен': 'Отключен',
        authorities.join(' | ')
    ]
};

export function Users() {
    const [users, update] = useState([]);

    const deleteHandler = () => {
        utils.getUsersList(update)
    };

    const deleteUser = (index) => {
        utils.deleteUser(users[index].id)
    };

    const convertUsersList = () => {
        return users && users.map((item) => {
            return convertUser(item)
        })
    };

    useEffect(() => {
        utils.getUsersList()(update)
    }, []);

    return (
        <div>
            <MaterialTable
                tableHeaderColor="success"
                tableHead={HEADERS} tableData={convertUsersList()}
            />
        </div>
    )
}


export function Profile() {

    const [user, update] = useState();

    useEffect(() => {
        utils.getMe()(update)
    }, []);

    return (
        <div className={useStyle().main}>
            <MaterialTable tableData={[convertUser(user)]} tableHead={HEADERS}/>
        </div>
    )
}
