import {
    blackColor,
    whiteColor,
    primaryColor,
    hexToRgb
} from "../connon-styles";

const cardStyle = {
    card: {
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
        background: whiteColor,
        width: "100%",
        boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem",
        "&:hover": {
            boxShadow: `0 14px 26px -12px rgba(${hexToRgb(blackColor)}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(primaryColor[0])}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(blackColor)}, 0.2)`
        },
        transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    cardPlain: {
        background: "transparent",
        boxShadow: "none"
    },
    cardProfile: {
        marginTop: "30px",
        textAlign: "center"
    },
    cardChart: {
        "& p": {
            marginTop: "0px",
            paddingTop: "0px"
        }
    }
};

export default cardStyle;
