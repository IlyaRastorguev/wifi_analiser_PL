import React, {useState, useEffect} from 'react'
import MaterialTable from "../../components/table/table";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add'
import utils from './utils'

import styles from './style'
import Toolbar from "../../components/toolbar/toolbar";
import IconButton from "@material-ui/core/IconButton";
import AddNewUser from "./new-user-view";

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
    const classes = useStyle();

    const [users, update] = useState([]);
    const [addUser, add] = useState(false);

    const deleteHandler = (i) => {
       console.warn(i)
    };

    const backHandler = () => {
        add(false)
    };

    const addHandler = () => {
        add(true)
    };

    const addUserButton = () => {
        return (
            <IconButton title="Добавить нового юзера" onClick={addHandler}>
                <AddIcon />
            </IconButton>
        )
    };

    const convertUsersList = () => {
        return users && users.map((item) => {
            return convertUser(item)
        })
    };

    const createAddUserView = () => {
        return (<AddNewUser />)
    };

    const createUsersView = () => {
        return (
            <MaterialTable
                className={classes.table}
                tableHead={LIST_HEADERS} tableData={convertUsersList()}
                deleteHandler={deleteHandler}
            />
        )
    };

    useEffect(() => {
        utils.getUsersList()(update)
    }, []);

    return (
        <div>
            <Toolbar backHandler={addUser ? backHandler : undefined} actions={[addUserButton()]}/>
            {addUser ? createAddUserView() : createUsersView()}
        </div>
    )
}


export function Profile() {
    const classes = useStyle();

    const [user, update] = useState();

    useEffect(() => {
        utils.getMe()(update)
    }, []);

    return (
        <div>
            <MaterialTable className={classes.table} tableData={[convertUser(user)]} tableHead={PROFILE_HEADERS}/>
        </div>
    )
}
