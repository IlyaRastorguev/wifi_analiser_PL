import {
    successColor,
    warningColor,
    dangerColor,
    hexToRgb, whiteColor
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
        root: {
            width: '100%',
        },
        heading: {
        }
    },
    BAD: {
        backgroundColor: `rgba(${hexToRgb(dangerColor[0])}, 1)`,
        color: whiteColor
    },
    NORMAL: {
        backgroundColor: `rgba(${hexToRgb(warningColor[3])}, 1)`,
        color: whiteColor
    },
    GOOD: {
        backgroundColor: `rgba(${hexToRgb(successColor[3])}, 1)`,
        color: whiteColor
    },
    EXCELLENT: {
        backgroundColor: `rgba(${hexToRgb(successColor[0])}, 1)`,
        color: whiteColor
    }
};

export default reportView