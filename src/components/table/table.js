import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import styles from './style';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/core/SvgIcon/SvgIcon";

const useStyles = makeStyles(styles);

export default function MaterialTable(props) {
    const classes = useStyles();

    function createDeleteAction(index, callback) {
        return  () => {
            const actionHandler = () => {
                callback(index)
            };

            return  (
                <TableCell className={classes.tableCell}>
                    <IconButton onChange={actionHandler} color='primary'>
                        <DeleteIcon color='action'/>
                    </IconButton>
                </TableCell>
            )
        }
    }

    const { tableHead, tableData, tableHeaderColor, action, callback } = props;
    return (
        <div className={classes.tableResponsive}>
            <Table className={classes.table}>
                {tableHead !== undefined ? (
                    <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
                        <TableRow className={classes.tableHeadRow} color="">
                            {tableHead.map((prop, key) => {
                                return (
                                    <TableCell
                                        className={classes.tableCell + " " + classes.tableHeadCell}
                                        key={key}
                                    >
                                        {prop}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                ) : null}
                <TableBody>
                    {tableData.map((prop, key) => {
                        return (
                            <TableRow key={key} className={classes.tableBodyRow}>
                                {action === 'delete' ? createDeleteAction(key, callback)(): ''}
                                {prop.map((prop, key) => {
                                    return (
                                        <TableCell className={classes.tableCell} key={key}>
                                            {prop}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

MaterialTable.defaultProps = {
    tableHeaderColor: "gray"
};

MaterialTable.propTypes = {
    tableHeaderColor: PropTypes.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    action: PropTypes.oneOf(['delete']),
    callback: PropTypes.func
};
