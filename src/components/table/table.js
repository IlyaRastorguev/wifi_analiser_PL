import React, {useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import styles from './style';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(styles);

export default function MaterialTable(props) {
    const classes = useStyles();

    function createDeleteAction(index, handler) {
        return  () => {
            const actionHandler = (event) => {
                event.stopPropagation();
                handler(index)
            };

            return  (
                <TableCell size='small' className={classes.tableCell}>
                    <IconButton onClick={actionHandler} color='primary'>
                        <DeleteIcon color='action'/>
                    </IconButton>
                </TableCell>
            )
        }
    }

    function createSelectAction(index, handler) {
        return () => {
           handler(index)
        }
    }

    const { className, tableHead, tableData, tableColor, deleteHandler, selectHandler } = props;

    return (
        <div className={className}>
            <div className={classes.tableResponsive}>
                <Table className={classes.table}>
                    {tableHead !== undefined ? (
                        <TableHead className={classes[tableColor + "TableHeader"]}>
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
                    <TableBody className={classes[tableColor + "TableBody"]}>
                        {tableData.map((prop, key) => {
                            return (
                                <TableRow
                                    hover={!!selectHandler}
                                    key={key}
                                    className={classes.tableBodyRow}
                                    onClick={selectHandler && createSelectAction(key, selectHandler)}
                                    style={selectHandler && {'cursor': 'pointer'}}
                                >
                                    {!!deleteHandler ? createDeleteAction(key, deleteHandler)(): ''}
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
        </div>
    );
}

MaterialTable.defaultProps = {
    tableColor: "gray"
};

MaterialTable.propTypes = {
    className: PropTypes.string,
    tableColor: PropTypes.oneOf([
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
    deleteHandler: PropTypes.func,
    selectHandler: PropTypes.func
};
