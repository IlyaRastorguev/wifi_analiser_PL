import React, {useState} from 'react'
import FormControl from "@material-ui/core/FormControl";
import {TextField} from "@material-ui/core";
import commonUtils from "../common/utils";
import RegularButton from "../../components/buttons/button";
import Utils from './utils'

import styles from './style'
import makeStyles from "@material-ui/core/styles/makeStyles";
import SnackBarView from "../common/snackbar/snackbar";

const useStyles = makeStyles(styles);


const NAME_EXPR = '';

export default function AddNewLocation() {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [snack, showSnack] = useState(false);

    const nameInputHandler = (event) => {
        const result = commonUtils.inputHandler(event, NAME_EXPR);

        setName(result.value);

        if (result.isValid) setNameError(false);
        else setName(true)
    };

    const clear = () => {
        showSnack(true);
        setName('');
    };

    const addLocationAction = () => {
        Utils.addLocation(name)(clear)
    };

    return (
        <div className={classes.addNew}>
            <FormControl>
                <TextField
                    label="Название"
                    value={name}
                    margin="normal"
                    error={nameError}
                    variant="outlined"
                    onChange={nameInputHandler}
                />
                <RegularButton color="success" onClick={addLocationAction} disabled={nameError}>Добавить</RegularButton>
            </FormControl>
            {snack ? (<SnackBarView body="Вы успешно добавили локацию"/>) : ''}
        </div>
    )
}