import {primaryColor} from "../../../components/connon-styles";


export default {
    cardBody: {
        overflow: 'scroll',
        maxHeight: '78vh',
        position: 'relative',
        padding: '0',
    },
    floatButton: {
        backgroundColor: primaryColor,
        float: 'right',
        "& svg": {
            transform: 'rotate(180deg)'
        }
    }
}