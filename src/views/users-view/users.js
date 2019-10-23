import React, {useState, useEffect} from 'react'
import MaterialTable from "../../components/table/table";

const HEADERS = [
    'Название',
];

export function Users() {
    const [users, update] = useState([]);

    return (
        <MaterialTable tableHeaderColor="success" tableHead={HEADERS} tableData={users}/>
    )
}