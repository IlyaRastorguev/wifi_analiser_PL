import React, {useState, useEffect} from 'react'
import MaterialTable from "../../components/table/table";
import utils from './utils'
import RegularButton from "../../components/buttons/button";
import { makeStyles } from "@material-ui/core/styles";

import style from './style'

const useStyle = makeStyles(style);

const HEADERS = [
    'Действие',
    'Название',
];

export function Locations() {
    const [locations, update] = useState([]);

    const deleteHandler = (index) => {
        console.warn("delete", index)
    };

    const convertLocations = () => {
        if (!locations) return [];

        return locations.map((item) => {
            return [item.name]
        })
    };

    useEffect(() => {
        utils.getLocations()(update)
    }, []);

    return (
        <div>
            <div>
                <RegularButton color="primary">Добавить локацию</RegularButton>
            </div>
            <MaterialTable
                tableHead={HEADERS}
                tableData={convertLocations()}
                action="delete"
                callback={deleteHandler}
            />
        </div>

    )
}
