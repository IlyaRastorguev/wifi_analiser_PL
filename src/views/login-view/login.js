import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Card from "../../components/card/Card";
import { makeStyles } from "@material-ui/core/styles";

import style from './style'
import utils from "./utils";
import commonUtils from '../common/utils'
import RouterLink from "../../components/links/routing-link";
import {CardHeader, TextField} from "@material-ui/core";

const styles = makeStyles(style);
const LOGIN_EXPR = '';
const PASSWORD_EXPR = '';

export default function Login () {
    const [pass, setPass] = useState('');
    const [login, setLogin] = useState('');
    const [passError, setPassErr] = useState(false);
    const [loginError, setLogErr] = useState(false);


    const loginInputHandler = (event) => {
        const result = commonUtils.inputHandler(event, LOGIN_EXPR);

        setLogin(result.value);

        if (result.isValid) setLogErr(false);
        else setLogErr(true)
    };
    const passwordInputHandler = (event) => {
        const result = commonUtils.inputHandler(event, PASSWORD_EXPR);

        setPass(result.value);

        if (result.isValid) setPassErr(false);
        else setPassErr(true)
    };

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
                        label="Пароль"
                        value={pass}
                        margin="normal"
                        error={passError}
                        variant="outlined"
                        type="password"
                        onChange={passwordInputHandler}
                    />
                </div>
                <RouterLink disabled={passError || loginError} to="/home/dashboard" action={utils.Auth(login, pass)} text="Войти"/>
            </Card>
        </div>
    )
}

Login.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
