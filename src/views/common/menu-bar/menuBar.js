import React from "react";
import BugReport from "@material-ui/icons/BugReport";
import ViewList from "@material-ui/icons/ViewList";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Location from '@material-ui/icons/MyLocation';
import Tabs from '../../../components/tabs/MaterialTab';
import {Reports} from "../../reports-view/reports";
import {Locations} from "../../locations-view/locations";
import {Users,Profile} from "../../users-view/users";

import { makeStyles } from "@material-ui/core/styles";

import styles from './style'

export default function MenuBar() {
    const classes = makeStyles(styles);

    return (
        <Tabs
            bodyClass={classes().cardBody}
            title="Menu"
            headerColor="success"
            tabs={[
                {
                    tabName: "Reports",
                    tabIcon: BugReport,
                    tabContent: (<Reports />)
                },
                {
                    tabName: "Users",
                    tabIcon: ViewList,
                    tabContent: (<Users />)
                },
                {
                    tabName: "Locations",
                    tabIcon: Location,
                    tabContent: (<Locations />)
                },
                {
                    tabName: "User settings",
                    tabIcon: AccountCircle,
                    tabContent: (<Profile />)
                }
            ]}
        />
    );
}
