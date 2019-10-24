import {whiteColor} from "../connon-styles";

const toolbar = {
    main: {
        flexDirection: 'row',
        display: 'flex',
        flex: '0 1 auto',
        alignItems: 'center',
        marginBottom: '16px',
        paddingTop: '16px',
        position: 'sticky',
        top: 0,
        zIndex: 2,
        backgroundColor: whiteColor,
        marginRight: '-8px',
        marginLeft: '-8px',
        boxShadow: '0px 20px 14px -19px rgb(105, 105, 105), -20px -19px 0px 0px rgb(255, 255, 255), 20px -20px 0px 0px rgb(255, 255, 255)',
        borderRadius: '4px'
    },
    backButtonText: {
        marginLeft: '8px',
        lineHeight: '48px'
    },
};

export default toolbar