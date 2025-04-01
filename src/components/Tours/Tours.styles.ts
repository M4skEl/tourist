import {createStyles} from "@/utils/createStyles";
import Colors from "@/utils/Colors";

export const styles = () =>
    createStyles({
        sectionContainer: {
            margin: '100px 40px 40px',
            color: Colors.dark,
            '@media (max-width: 768px)': {
                marginTop: '20px',
            },
        },
        titleContainer: {
            margin: '0 40px 40px',
            display: 'flex',
            justifyContent: 'center',

        },
        title: {
            fontSize: '70px',
            fontWeight: '700',
            '@media (max-width: 768px)': {
                fontSize: '48px',
            },
        },
        contentContainer: {},
        tourContainer: {
            width: '100%',
            display: 'flex',
            gap: '40px',
            marginBottom: '70px',
            alignItems: 'center',
            '@media (max-width: 820px)': {
                flexDirection: 'column',
            },
        },

        imageContainer: {
            position: 'relative',
            //width:'30%',
            padding: '40px',
            maxHeight: '530px',
            '& img': {
                height: '450px !important',
                //borderRadius: '15px',
            },
            '@media (max-width: 820px)': {
                display: 'flex',
                justifyContent: 'center',
            },
        },
        imageStyles: {
            maxWidth: '100%',
            objectFit: 'cover'
        },

        leftTopCornerInside: {
            position: 'absolute',
            top: '25px',
            left: '25px',
            width: '20px',
            height: '20px',
            borderTop: '3px solid black',
            borderLeft: '3px solid black',
        },
        leftBottomCornerInside: {
            position: 'absolute',
            bottom: '25px',
            left: '25px',
            width: '20px',
            height: '20px',
            borderBottom: '3px solid black',
            borderLeft: '3px solid black',
        },
        rightTopCornerInside: {
            position: 'absolute',
            top: '25px',
            right: '25px',
            width: '20px',
            height: '20px',
            borderTop: '3px solid black',
            borderRight: '3px solid black',
        },
        rightBottomCornerInside: {
            position: 'absolute',
            bottom: '25px',
            right: '25px',
            width: '20px',
            height: '20px',
            borderBottom: '3px solid black',
            borderRight: '3px solid black',
        },

        leftTopCorner: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '60px',
            height: '60px',
            borderTop: '10px solid black',
            borderLeft: '10px solid black',
        },
        leftBottomCorner: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '60px',
            height: '60px',
            borderBottom: '10px solid black',
            borderLeft: '10px solid black',
        },
        rightTopCorner: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '60px',
            height: '60px',
            borderTop: '10px solid black',
            borderRight: '10px solid black',
        },
        rightBottomCorner: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '60px',
            height: '60px',
            borderBottom: '10px solid black',
            borderRight: '10px solid black',
        },


        descriptionContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',

        },
        descriptionTitle: {
            fontSize: '42px',
            fontWeight: '700',
            '@media (max-width: 500px)': {
                fontSize: '38px',
            },
        },
        descriptionText: {
            textIndent: '2rem',
            fontSize: '22px',
            paddingRight: '20px',
            fontWeight: '300',
            marginBottom: '20px',
            '@media (max-width: 650px)': {
                textIndent: '0',
                fontSize: '18px',
            },
        },
        listContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
            '@media (max-width: 650px)': {
                gap:'5px',
            },
        },
        listItem: {
            display: 'flex',
            alignItems: 'flex-end',
            gap: '10px',
            '@media (max-width: 650px)': {
                alignItems: 'flex-start',
            },
        },
        listTextBold: {
            fontSize: '24px',
            fontWeight: '500',
            width: '100%',
            maxWidth: '200px',
            '@media (max-width: 650px)': {
                fontSize: '20px',
                minWidth: '200px',
            },
        },
        listText: {
            fontSize: '22px',
            fontWeight: '300',
            '@media (max-width: 650px)': {
                fontSize: '18px',
            },

        },
    })
