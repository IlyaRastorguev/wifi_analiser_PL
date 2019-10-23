import React, {useState, useEffect} from 'react'
import MaterialTable from "../../components/table/table";
import utils from './utils'
import MaterialInput from "../../components/input/input";

const HEADERS = [
    'Дата создания',
    'ID юзера',
    'Локация',
    'ID устройства',
    'Комментарий'
];

export function Reports() {
    const [reports, update] = useState([]);
    const [page, countPages] = useState(0);
    const [size, setSize] = useState(10);

    const sizeCountHandler = (event) => {
        event && event.target && setSize(event.target.value)
    };

    useEffect(() => {
        utils.getReports(page, size)(update)
    }, [page]);


    return (
        <div>
            <MaterialInput inputProps={{onchange: sizeCountHandler, value: size}} labelText="Загружать по: "/>
            <MaterialTable tableHeaderColor="success" tableHead={HEADERS} tableData={reports}/>
        </div>
    )
}