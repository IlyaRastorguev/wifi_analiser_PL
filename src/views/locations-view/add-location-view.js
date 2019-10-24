import React, {useState} from 'react'
import FormControl from "@material-ui/core/FormControl";
import {TextField} from "@material-ui/core";
import commonUtils from "../common/utils";
import RegularButton from "../../components/buttons/button";
import Utils from './utils'


const NAME_EXPR = '';

export default function AddNewLocation() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    const nameInputHandler = (event) => {
        const result = commonUtils.inputHandler(event, NAME_EXPR);

        setName(result.value);

        if (result.isValid) setNameError(false);
        else setName(true)
    };

    const clear = () => {
        setName();
    };

    const addLocationAction = () => {
        Utils.addUser(name)(clear)
    };

    return (
        <div>
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
        </div>
    )
}