import React, {useState, useEffect} from 'react'
import MaterialTable from "../../components/table/table";
import utils from './utils'
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add'

import style from './style'
import Toolbar from "../../components/toolbar/toolbar";
import IconButton from "@material-ui/core/IconButton";
import AddNewLocation from "./add-location-view";

const useStyles = makeStyles(style);

const HEADERS = [
    'Действие',
    'Название',
];

export function Locations() {
    const classes = useStyles();

    const [locations, update] = useState([]);
    const [addLocation, add] = useState(false);

    const backHandler = () => {
        add(false)
    };

    const addHandler = () => {
        add(true)
    };

    const deleteHandler = (index) => {
        console.warn("delete", index)
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
        return (
            <MaterialTable
                className={classes.table}
                tableHead={HEADERS}
                tableData={convertLocations()}
                deleteHandler={deleteHandler}
            />
        )
    };

    useEffect(() => {
        utils.getLocations()(update)
    }, []);

    return (
        <div>
            <Toolbar backHandler={addLocation ? backHandler: undefined} actions={[addLocationButton()]}/>
            {addLocation ? (<AddNewLocation />) : createLocationsView()}
        </div>

    )
}
