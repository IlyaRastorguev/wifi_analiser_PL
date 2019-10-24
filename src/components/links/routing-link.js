import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import RegularButton
    from '../buttons/button';


export default function RouterLink ({to, action, text, disabled}) {
    const [isValid, update] = useState(false);

    const validate = () =>  action(()=> update(true));

    return (
        <RegularButton disabled={disabled} color="success" onClick={validate}>
            {text}
            {isValid ? <Redirect to={to} /> : ''}
        </RegularButton>
    )
}
