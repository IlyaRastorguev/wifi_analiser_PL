import React, {useState} from 'react'
import {Snackbar, SnackbarContent} from "@material-ui/core";

export default function SnackBarView({body}) {
    const [show, set] = useState(true);

    const handleClose = () => {
        set(false)
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={show}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <SnackbarContent message={body}/>
        </Snackbar>
    )
}