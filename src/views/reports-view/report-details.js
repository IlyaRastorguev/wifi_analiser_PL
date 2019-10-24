import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import utils from './utils'

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
            'Рабочая частота'
        ];

        const data = [[
            spot['creationDate'],
            spot['bssid'],
            spot['rssi'],
            spot['frequency']
        ]];

        return (
            <div style={{width: '100%'}}>
                <MaterialTable
                    tableHead={headers}
                    tableData={data}
                />
            </div>
        )
    }

    function createList() {
        return spots && spots.map((item)=> {
            return (
                <ExpansionPanel style={{boxShadow: 'none'}}>
                    <ExpansionPanelSummary
                        className={classes[item['signalLevel']]}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <Typography>{`Точка: ${item['ssid']}. `}</Typography>
                        <Typography>{`Уровень сигнала: ${utils.signalLevelConverter(item['signalLevel'])}`}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.expanded}>
                        {createSpotDetailsView(item)}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        })
    }

    return (
        <div className={classes.detailInfo}>
            {createList()}
        </div>
    );
}