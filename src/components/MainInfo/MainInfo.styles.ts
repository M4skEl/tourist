import {createStyles} from "@/utils/createStyles";
import Colors from "@/utils/Colors";

export const styles = () =>
    createStyles({
        sectionContainer: {
            width: "100%",
            paddingTop: "100px",
            backgroundColor: Colors.green,
            color: Colors.beige,
            borderBottom: `2px solid black`,
            '@media (max-width: 600px)': {
                paddingTop: "20px",
            },
        },
        titleContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: '0 40px',
            marginBottom: '50px',
        },
        title: {
            fontSize: "70px",
            //fontFamily: "'Montserrat', sans-serif",
            fontWeight: '700',
            lineHeight: '80px',
            marginBottom: '50px',
            '@media (max-width: 768px)': {
                fontSize: '42px',
                marginBottom: '0',
            },
            '@media (max-width: 415px)': {
                fontSize: '38px',
                marginBottom: '0',
            },
        },


        contentContainer: {
            margin: "0 40px",
            paddingBottom: "50px",

        },
        row: {
            display: "flex",
            gap: '40px',
            width: '100%',
            marginBottom: '40px',
            '@media (max-width: 820px)': {
                flexDirection: 'column',
            },
        },
        leftContainer: {
            width: '50%',
            display: 'flex',
            gap: '20px',
            '@media (max-width: 820px)': {
                width: '100%',
            },
            '@media (max-width: 600px)': {
                flexDirection: 'column',
                alignItems: 'center',
            },
        },
        imageContainer: {
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            '& img': {
                height: '450px !important',
                borderRadius: '15px',
            },
            '@media (max-width: 820px)': {
                display: 'flex',
                alignItems: 'center',
            },
            '@media (max-width: 600px)': {
                width: '100%',
                justifyContent: 'center',
            },
        },
        imageStyles: {
            width: '100%',
            objectFit: 'cover',
            maxWidth: '450px',
        },
        textContainer: {
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',

            //padding:'50px 50px',
            //boxSizing:'border-box',
            '@media (max-width: 600px)': {
                width: '100%',
            },
        },
        textContentContainer: {
            padding: '50px 50px',
            boxSizing: 'border-box',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        leftTopCorner: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '60px',
            height: '60px',
            borderTop: `10px solid ${Colors.beige}`,
            borderLeft: `10px solid ${Colors.beige}`,
        },
        leftBottomCorner: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '60px',
            height: '60px',
            borderBottom: `10px solid ${Colors.beige}`,
            borderLeft: `10px solid ${Colors.beige}`,
        },
        rightTopCorner: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '60px',
            height: '60px',
            borderTop: `10px solid ${Colors.beige}`,
            borderRight: `10px solid ${Colors.beige}`,
        },
        rightBottomCorner: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '60px',
            height: '60px',
            borderBottom: `10px solid  ${Colors.beige}`,
            borderRight: `10px solid ${Colors.beige}`,
        },


        leftTopCornerInside: {
            position: 'absolute',
            top: '25px',
            left: '25px',
            width: '20px',
            height: '20px',
            borderTop: `3px solid ${Colors.beige}`,
            borderLeft: `3px solid ${Colors.beige}`,
        },
        leftBottomCornerInside: {
            position: 'absolute',
            bottom: '25px',
            left: '25px',
            width: '20px',
            height: '20px',
            borderBottom: `3px solid ${Colors.beige}`,
            borderLeft: `3px solid ${Colors.beige}`,
        },
        rightTopCornerInside: {
            position: 'absolute',
            top: '25px',
            right: '25px',
            width: '20px',
            height: '20px',
            borderTop: `3px solid ${Colors.beige}`,
            borderRight: `3px solid ${Colors.beige}`,
        },
        rightBottomCornerInside: {
            position: 'absolute',
            bottom: '25px',
            right: '25px',
            width: '20px',
            height: '20px',
            borderBottom: `3px solid ${Colors.beige}`,
            borderRight: `3px solid ${Colors.beige}`,
        },


        textTitle: {
            fontSize: '30px',
            fontWeight: '500',
        },
        textDescription: {
            fontSize: '18px',
            opacity: '0.8',
            marginBottom: '30px',
            fontWeight: 300,
        },
        textDescriptionTitle: {
            fontSize: '18px',
            fontWeight: 300,

        },
        rightContainer: {
            width: '50%',
            display: 'flex',
            gap: '20px',
            '@media (max-width: 820px)': {
                width: '100%',
            },
            '@media (max-width: 600px)': {
                flexDirection: 'column',
                alignItems: 'center',
            },
        },
        secondRowContainerReverse:{
            display: "flex",
            gap: '40px',
            width: '100%',
            marginBottom: '40px',
            '@media (max-width: 820px)': {
                flexDirection: 'column',
            },
            '@media (max-width: 600px)': {
                display:'none',
            },
        },
        secondRowContainerStraight:{
            display:'none',
            '@media (max-width: 600px)': {
                display:'flex',
                flexDirection: 'column',
                gap:'40px',
            },
        },


    })