import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import style from './style'

const useStyles = makeStyles(style);

export default function WorkArea ({children}) {
    return (
        <div className={useStyles().main}>
            {children}
        </div>
    )
}