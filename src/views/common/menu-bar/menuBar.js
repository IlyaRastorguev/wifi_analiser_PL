import React from "react";
import BugReport from "@material-ui/icons/BugReport";
import ViewList from "@material-ui/icons/ViewList";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Location from '@material-ui/icons/MyLocation';
import Tabs from '../../../components/tabs/MaterialTab';
import {Reports} from "../../reports-view/reports";
import {Locations} from "../../locations-view/locations";
import {Users,Profile} from "../../users-view/users";
import Exit from '@material-ui/icons/ExitToApp'

import { makeStyles } from "@material-ui/core/styles";

import styles from './style'
import Fab from "@material-ui/core/Fab";

export default function MenuBar() {
    const classes = makeStyles(styles);

    const logout = () => {
        window.location = '/login'
    };

    return (
        <div>
            <Tabs
                bodyClass={classes().cardBody}
                title="Панель управления"
                headerColor="success"
                tabs={[
                    {
                        tabName: "Отчёты",
                        tabIcon: BugReport,
                        tabContent: (<Reports />)
                    },
                    {
                        tabName: "Пользователи системы",
                        tabIcon: ViewList,
                        tabContent: (<Users />)
                    },
                    {
                        tabName: "Локации",
                        tabIcon: Location,
                        tabContent: (<Locations />)
                    },
                    {
                        tabName: "Аккаунт",
                        tabIcon: AccountCircle,
                        tabContent: (<Profile />)
                    }
                ]}
            />
            <Fab onClick={logout} className={classes().floatButton} aria-label="Выход" color="primary">
                <Exit />
            </Fab>
        </div>
    );
}
