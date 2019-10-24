import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";

import { makeStyles } from "@material-ui/core/styles";
import styles from './style'

const classes = makeStyles(styles);

export default function Toolbar ({backHandler}) {

    return (
        <div className={classes().main}>
            <IconButton onClick={backHandler} title="Назад">
                <ArrowBackIosIcon />
            </IconButton>
            <span className={classes.backButtonText}>Назад</span>
        </div>
    )
}