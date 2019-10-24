import React, {useState, useEffect} from 'react'
import MaterialTable from "../../components/table/table";
import utils from './utils'
import commonUtils from '../common/utils'
import locationUtils from '../locations-view/utils';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import style from './style'
import TablePagination from "@material-ui/core/TablePagination";
import ReportDetails from "./report-details";
import Toolbar from "../../components/toolbar/toolbar";
import EmptyView from "../common/empty-view/empty-view";
import SnackBarView from "../common/snackbar/snackbar";

const HEADERS = [
    'Действие',
    'Дата создания',
    'Устройсво',
    'Локация',
    'Репортирующий',
    'Комментарий'
];

const useStyles = makeStyles(style);

export function Reports() {
    const classes = useStyles();
    const [reports, updateReports] = useState();
    const [page, countPages] = useState(0);
    const [size, setSize] = useState(10);
    const [locations, updateLocations] = useState();
    const [selectedLocation, updateSelectedLocation] = useState("");
    const [selectedReport, setSelectedReport] = useState();
    const [permissions, setPermissions] = useState({});
    const [snack, showSnack] = useState(false);

    useEffect(()=> {
        locationUtils.getLocations()(updateLocations);
        commonUtils.roleModelHandler(['delete-reports'], setPermissions)
    }, []);

    const locationsHandler = (event) => {
        event && event.target && utils.getReports(event.target.value)(updateReports) && updateSelectedLocation(event.target.value)
    };

    const deleteHandler = (i) => {
        utils.deleteReport(reports[i].id)(() => {
            showSnack(true);
            utils.getReports(selectedLocation)(updateReports)
        });
    };

    const backHandler = () => setSelectedReport();

    const reportsDetailInfoHandler = (index) => {
        const details = reports[index] && reports[index]['wifiAnalyzeInfos'];

        const detailView = (
            <ReportDetails spots={details}/>
        );

        setSelectedReport(detailView)
    };

    const convertLocations = () => {
        if (!locations || locationUtils.length === 0) return [];

        return (
            <FormControl className={classes.locationsSelector}>
                <InputLabel>
                    Локация
                </InputLabel>
                <Select value={selectedLocation} onChange={locationsHandler} inputProps={{
                    name: 'locations',
                    id: 'locations-select',
                }} >
                    {locations.map((item) => {
                        return (<MenuItem value={item.id}>{item.name}</MenuItem>)
                    })}
                </Select>
            </FormControl>
        )
    };

    const convertReports = () => {
        if (!reports || reports.length === 0) return (<EmptyView text="Для просмотра отчетов необходимо выбрать локацию"/>);

        return (
            <FormControl fullWidth>
                <MaterialTable
                    className={classes.table}
                    tableHead={permissions['delete-reports'] ? HEADERS : HEADERS.slice(1, HEADERS.length)}
                    tableData={reportToArray()}
                    deleteHandler={permissions['delete-reports'] ? deleteHandler : undefined}
                    selectHandler={reportsDetailInfoHandler}
                />
                {createPaginationBar()}
            </FormControl>

        )
    };

    const createPaginationBar = () => {
        return (<TablePagination onChangePage={deleteHandler} rowsPerPage={size} page={page} count={reports.length}/>)
    };

    const reportToArray = () => {
        if (!reports) return;

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
        utils.getReports(page, size)(updateReports)
    }, [page]);


    return (
        <div>
            <Toolbar backHandler={selectedReport ? backHandler: undefined} actions={convertLocations()}/>
            {selectedReport ? selectedReport : convertReports()}
            {snack ? (<SnackBarView body="Вы успешно удалили отчёт"/>) : ''}
        </div>
    )
}
