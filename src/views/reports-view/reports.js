import React, {useState, useEffect} from 'react'
import MaterialTable from "../../components/table/table";
import utils from './utils'

const HEADERS = [
    'Действие',
    'Дата создания',
    'Устройсво',
    'Локация',
    'Репортирующий',
    'Комментарий'
];

export function Reports() {
    const [reports, update] = useState();
    const [page, countPages] = useState(0);
    const [size, setSize] = useState(10);

    const sizeCountHandler = (event) => {
        event && event.target && setSize(event.target.value)
    };

    const deleteHandler = (i) => {
        console.warn(i)
    };

    const reportsDetailInfoConverter = () => {

    }

    const reportConverter = () => {
        if (!reports) return [];

        return reports.map((item)=> {
            const {
                creationDate,
                comment,
                ownerUser,
                location,
                deviceInfo
            } = item;
            return [
                creationDate,
                deviceInfo.device,
                location.name,
                ownerUser.login,
                comment
            ]
        });
    };

    useEffect(() => {
        utils.getReports(page, size)(update)
    }, [page]);


    return (
        <div>
            <MaterialTable
                tableHeaderColor="success"
                tableHead={HEADERS}
                tableData={reportConverter()}
                callback={deleteHandler}
                action='delete'
            />
        </div>
    )
}
