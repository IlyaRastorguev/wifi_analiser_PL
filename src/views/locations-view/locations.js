import React, {useState, useEffect} from 'react'
import MaterialTable from "../../components/table/table";

const HEADERS = [
    'Название',
];

export function Locations() {
    const [locations, update] = useState([]);

    return (
        <MaterialTable tableHeaderColor="success" tableHead={HEADERS} tableData={locations}/>
    )
}