import React from 'react'
import {makeStyles, Typography} from "@material-ui/core";

import styles from './style'

const useStyles = makeStyles(styles);

export default function EmptyView({text}) {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Typography variant="h6">{text}</Typography>
        </div>
    )
}