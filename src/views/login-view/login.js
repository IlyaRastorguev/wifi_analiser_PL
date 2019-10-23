import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Card from "../../components/card/Card";
import MaterialInput from "../../components/input/input";
import { makeStyles } from "@material-ui/core/styles";
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import style from './style'
import utils from "./utils";
import RouterLink from "../../components/links/routing-link";
import {CardHeader, TextField} from "@material-ui/core";

const styles = makeStyles(style);
const LOGIN_EXPR = '';
const PASSWORD_EXPR = '';

export default function Login () {
    const [pass, setPass] = useState('');
    const [login, setLogin] = useState('');
    const [scope, setScope] = useState('role1');
    const [passError, setPassErr] = useState(false);
    const [loginError, setLogErr] = useState(false);


    const loginInputHandler = (event) => {
        const result = utils.inputHandler(event, LOGIN_EXPR);

        if (result.isValid) setLogin(result.value) && setLogErr(false);
        else setLogErr(true)
    };
    const passwordInputHandler = (event) => {
        const result = utils.inputHandler(event, PASSWORD_EXPR);

        if (result.isValid) setPass(result.value) && setPass(false);
        else setPassErr(true)
    };
    const scopeChangeHandler = (event) => event && event.target && setScope(event.target.value);

    return (
        <div className={styles().main}>
            <Card className={styles().card}>
                <CardHeader title="Добро пожаловать в анализатор wi-fi сетей"/>
                <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <TextField
                        label="Имя пользователя"
                        value={login}
                        margin="normal"
                        error={loginError}
                        variant="outlined"
                        onChange={loginInputHandler}
                    />
                    <TextField
                        label="Имя пользователя"
                        value={pass}
                        margin="normal"
                        error={passError}
                        variant="outlined"
                        type="password"
                        onChange={passwordInputHandler}
                    />
                </div>
                <FormControl>
                    <InputLabel htmlFor="scope-select">Выберите вашу роль</InputLabel>
                    <Select value={scope} onChange={scopeChangeHandler} inputProps={{
                        name: 'scope',
                        id: 'scope-select',
                    }} >
                        <MenuItem value="read">Только чтение</MenuItem>
                        <MenuItem value="read write">Чтение и запись</MenuItem>
                    </Select>
                </FormControl>
                <RouterLink to="/home/dashboard" action={utils.Auth(login, pass, scope)} text="Войти"/>
            </Card>
        </div>
    )
}

Login.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
