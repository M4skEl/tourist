import {createStyles} from "@/utils/createStyles";
import Colors from "@/utils/Colors";

export const styles = () =>
    createStyles({
        sectionContainer: {
            padding: '0 40px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: Colors.green,
            color: Colors.white,

        },
        titleContainer: {
            margin: '0 40px 40px',
            display: 'flex',
            justifyContent: 'center',

        },
        title: {
            fontSize: '70px',
            fontWeight: 700,
            '@media (max-width: 768px)': {
                fontSize: '48px',
            },
        },
        contentContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '75%',
            Bottom: '40px',
            '@media (max-width: 1100px)': {
                width: '100%',
            },

        },

        leftTopCorner: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '60px',
            height: '60px',
            borderTop: `10px solid ${Colors.white}`,
            borderLeft: `10px solid ${Colors.white}`,
        },
        leftBottomCorner: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '60px',
            height: '60px',
            borderBottom: `10px solid ${Colors.white}`,
            borderLeft: `10px solid ${Colors.white}`,
        },
        rightTopCorner: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '60px',
            height: '60px',
            borderTop: `10px solid ${Colors.white}`,
            borderRight: `10px solid ${Colors.white}`,
        },
        rightBottomCorner: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '60px',
            height: '60px',
            borderBottom: `10px solid ${Colors.white}`,
            borderRight: `10px solid ${Colors.white}`,
        },


        leftTopCornerInside: {
            position: 'absolute',
            top: '25px',
            left: '25px',
            width: '20px',
            height: '20px',
            borderTop: `3px solid ${Colors.white}`,
            borderLeft: `3px solid ${Colors.white}`,
        },
        leftBottomCornerInside: {
            position: 'absolute',
            bottom: '25px',
            left: '25px',
            width: '20px',
            height: '20px',
            borderBottom: `3px solid ${Colors.white}`,
            borderLeft: `3px solid ${Colors.white}`,
        },
        rightTopCornerInside: {
            position: 'absolute',
            top: '25px',
            right: '25px',
            width: '20px',
            height: '20px',
            borderTop: `3px solid ${Colors.white}`,
            borderRight: `3px solid ${Colors.white}`,
        },
        rightBottomCornerInside: {
            position: 'absolute',
            bottom: '25px',
            right: '25px',
            width: '20px',
            height: '20px',
            borderBottom: `3px solid ${Colors.white}`,
            borderRight: `3px solid ${Colors.white}`,
        },

        descriptionContainer: {
            padding: '50px 200px',
            '@media (max-width: 1100px)': {
                padding: '50px 100px',
            },
            '@media (max-width: 768px)': {
                padding: '50px 70px',
            },


        },
        description: {
            fontSize: '32px',
            marginBottom: '20px',
            '@media (max-width: 1100px)': {
                fontSize: '24px',
                fontWeight: '500',
            },
            '@media (max-width: 768px)': {
                fontWeight: '300',
            },
        },
        listContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        },
        listItem: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '22px',
            '&::before': {
                display: 'inline-block',
                content: '""',
                width: '10px',
                height: '10px',
                backgroundColor: Colors.white,
                borderRadius: '50%',
                marginRight: '10px',
                minWidth: '10px',
                minHeight: '10px',
            },
            '@media (max-width: 768px)': {
                fontWeight: '300',
            },
            '@media (max-width: 500px)': {
                fontSize: '18px',
            },
        },
        bottomBlock:{
            display: 'flex',
            gap: '50px',
        },
        buttonContainer: {
            marginTop: '50px',
            height: '80px',
            //width: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        button: {
            padding: '10px 20px',
            position: 'relative',
            fontSize: '32px',
            backgroundColor: 'transparent',
            color: Colors.white,
            fontWeight: '500',
            transition: 'all .3s',
            "&:hover": {
                //backgroundColor: 'white',
                //padding: '15px',
                fontSize: '38px',
                //opacity: 0.8,
            },
            '@media (max-width: 768px)': {
                fontSize: '28px'
            },
            '@media (max-width: 500px)': {
                fontSize: '22px',
            },
        },

        leftTopCornerButton: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '25px',
            height: '25px',
            borderTop: `5px solid ${Colors.white}`,
            borderLeft: `5px solid ${Colors.white}`,
            '@media (max-width: 500px)': {
                width: '15px',
                height: '15px',
                borderTop: `3px solid ${Colors.white}`,
                borderLeft: `3px solid ${Colors.white}`,
            },
        },
        leftBottomCornerButton: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '25px',
            height: '25px',
            borderBottom: `5px solid ${Colors.white}`,
            borderLeft: `5px solid ${Colors.white}`,
            '@media (max-width: 500px)': {
                width: '15px',
                height: '15px',
                borderBottom: `3px solid ${Colors.white}`,
                borderLeft: `3px solid ${Colors.white}`,
            },
        },
        rightTopCornerButton: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '25px',
            height: '25px',
            borderTop: `5px solid ${Colors.white}`,
            borderRight: `5px solid ${Colors.white}`,
            '@media (max-width: 500px)': {
                width: '15px',
                height: '15px',
                borderTop: `3px solid ${Colors.white}`,
                borderRight: `3px solid ${Colors.white}`,
            },
        },
        rightBottomCornerButton: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '25px',
            height: '25px',
            borderBottom: `5px solid ${Colors.white}`,
            borderRight: `5px solid ${Colors.white}`,
            '@media (max-width: 500px)': {
                width: '15px',
                height: '15px',
                borderBottom: `3px solid ${Colors.white}`,
                borderRight: `3px solid ${Colors.white}`,
            },
        },


    })
