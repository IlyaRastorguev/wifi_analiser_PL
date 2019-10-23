import React, {useState, useEffect} from 'react'
import MaterialTable from "../../components/table/table";
import { makeStyles } from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";
import utils from './utils'

import styles from './style'
import RegularButton from "../../components/buttons/button";

const useStyle = makeStyles(styles);

const LIST_HEADERS = [
    'Действие',
    'Дата регистрации',
    'Логин',
    'Статус',
    'Список ролей'
];

const PROFILE_HEADERS = [
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

    const deleteHandler = (i) => {
       console.warn(i)
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
            <div>
                <RegularButton color="primary">Создать юзера</RegularButton>
            </div>
            <MaterialTable
                tableHeaderColor="success"
                tableHead={LIST_HEADERS} tableData={convertUsersList()}
                action='delete'
                callback={deleteHandler}
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
            <MaterialTable tableData={[convertUser(user)]} tableHead={PROFILE_HEADERS}/>
        </div>
    )
}
