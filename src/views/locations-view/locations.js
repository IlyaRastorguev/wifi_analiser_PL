import React, {useState, useEffect} from 'react'
import MaterialTable from "../../components/table/table";
import utils from './utils'
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add'

import style from './style'
import Toolbar from "../../components/toolbar/toolbar";
import IconButton from "@material-ui/core/IconButton";
import AddNewLocation from "./add-location-view";
import EmptyView from "../common/empty-view/empty-view";
import commonUtils from "../common/utils";

const useStyles = makeStyles(style);

const HEADERS = [
    'Действие',
    'Название',
];

export function Locations() {
    const classes = useStyles();

    const [locations, update] = useState([]);
    const [addLocation, add] = useState(false);
    const [permissions, setPermissions] = useState({});

    const backHandler = () => {
        add(false);
        utils.getLocations()(update)
    };

    const addHandler = () => {
        add(true)
    };

    const deleteHandler = (i) => {
        utils.deleteLocation(locations[i].id)(() => utils.getLocations()(update))
    };

    const convertLocations = () => {
        if (!locations) return [];

        return locations.map((item) => {
            return [item.name]
        })
    };

    const addLocationButton = () => {
        return (
            <IconButton title="Добавить локацию" onClick={addHandler}>
                <AddIcon />
            </IconButton>
        )
    };

    const createLocationsView = () => {
        if (!locations || locations.length === 0) return (<EmptyView text="Тут пока ничего нет"/>);

        return (
            <MaterialTable
                className={classes.table}
                tableHead={permissions['delete-locations'] ? HEADERS : HEADERS.slice(1, HEADERS.length)}
                tableData={convertLocations()}
                deleteHandler={permissions['delete-locations'] ? deleteHandler : undefined}
            />
        )
    };

    useEffect(() => {
        commonUtils.roleModelHandler(['add-locations', 'delete-locations'], setPermissions);
        utils.getLocations()(update);
    }, []);

    return (
        <div>
            <Toolbar backHandler={addLocation ? backHandler: undefined} actions={permissions['add-locations'] ? [addLocationButton()] : undefined}/>
            {addLocation ? (<AddNewLocation />) : createLocationsView()}
        </div>

    )
}
