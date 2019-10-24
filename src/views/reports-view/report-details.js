import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from './style'
import MaterialTable from "../../components/table/table";

const useStyles = makeStyles(styles);

export default function ReportDetails({spots}) {
    const classes = useStyles();

    function createSpotDetailsView(spot = {}) {
        const headers = [
            'Дата проверки',
            'MAC адрес точки',
            'Уровень принимаемого сигнала',
            'Уровень сигнала точки',
            'Рабочая частота'
        ];

        const data = [[
            spot['creationDate'],
            spot['bssid'],
            spot['rssi'],
            spot['signalLevel'],
            spot['frequency']
        ]];

        return (
            <MaterialTable
                tableHead={headers}
                tableData={data}
            />
        )
    }

    function createList() {
        return spots && spots.map((item)=> {
            return (
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        className={classes[item['signalLevel']]}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <Typography className={classes.detailInfo.heading}>{item['ssid']}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {createSpotDetailsView(item)}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        })
    }

    return (
        <div className={classes.detailInfo.root}>
            {createList()}
        </div>
    );
}