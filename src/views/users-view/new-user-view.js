import React, {useState} from 'react'
import FormControl from "@material-ui/core/FormControl";
import {FormControlLabel, Switch, TextField} from "@material-ui/core";
import commonUtils from "../common/utils";
import RegularButton from "../../components/buttons/button";
import Utils from './utils'

import styles from './style'
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(styles);


const LOGIN_EXPR = '';
const PASSWORD_EXPR = '';

export default function AddNewUser() {
    const classes = useStyles();

    const [pass, setPass] = useState('');
    const [login, setLogin] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
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
    const isLoginCheckboxHandler = () => {
        setIsAdmin(!isAdmin)
    };

    const clear = () => {
        setLogin();
        setPass();
        setIsAdmin(false)
    };

    const addUserAction = () => {
        Utils.addUser(login, pass, isAdmin)(clear)
    };

    return (
        <div className={classes.addNew}>
            <FormControl>
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
                <TextField
                    label="Повторите пароль"
                    value={pass}
                    margin="normal"
                    error={passError}
                    variant="outlined"
                    type="password"
                    onChange={passwordInputHandler}
                />
                <FormControlLabel control={
                    (<Switch
                        checked={isAdmin}
                        onChange={isLoginCheckboxHandler}
                    />)
                } label="Администратор"/>
                <RegularButton color="success" onClick={addUserAction} disabled={loginError || passError}>Создать</RegularButton>
            </FormControl>
        </div>
    )
}