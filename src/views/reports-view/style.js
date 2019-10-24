import {
    successColor,
    warningColor,
    dangerColor,
    hexToRgb, whiteColor, boxShadow
} from '../../components/connon-styles';

function convertSignalLevelToColor(value) {
    switch (value) {
        case "NORMAL":
            return hexToRgb(warningColor[1]);
        case "GOOD":
            return hexToRgb(successColor[1]);
        case "EXCELLENT":
            return hexToRgb(successColor[0]);
        case "BAD":
            return hexToRgb(dangerColor[1]);

    }
}

const reportView = {
    locationsSelector: {
        minWidth: '200px'
    },
    detailInfo: {
        padding: '15px'
    },
    BAD: {
        border: `2px solid rgb(${hexToRgb(dangerColor[0])})`,
        borderRadius: '4px',
        margin: '2px 0'
    },
    NORMAL: {
        border: `2px solid rgb(${hexToRgb(warningColor[0])})`,
        borderRadius: '4px',
        margin: '2px 0'
    },
    GOOD: {
        border: `2px solid rgb(${hexToRgb(successColor[3])})`,
        borderRadius: '4px',
        margin: '2px 0'
    },
    EXCELLENT: {
        border: `2px solid rgb(${hexToRgb(successColor[0])})`,
        borderRadius: '4px',
        margin: '2px 0'
    },
    expanded: {
        boxShadow: '0px 20px 14px -19px rgb(105, 105, 105), -20px -19px 0px 0px rgb(255, 255, 255), 20px -20px 0px 0px rgb(255, 255, 255)'
    },
    table: {
        padding: '0 15px'
    }
};

export default reportView