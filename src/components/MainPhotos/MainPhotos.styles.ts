import {createStyles} from "@/utils/createStyles";
import Colors from "@/utils/Colors";

export const styles = () =>
    createStyles({
        sectionContainer: {
            width: "100%",
            backgroundColor: Colors.beige,
        },
        firstRowContainer: {
            display: "flex",
            gap:'20px',
            margin: "10px 40px",

        },
        leftFirst: {
            display: "flex",
            width: "50%",
            gap:"10px",
            '@media (max-width: 820px)': {
                width: '100%',
            },
        },
        verticalFirst: {
            width: "50%",
            '& img':{
                height: '430px !important',
                borderRadius: '15px',
            },
        },
        verticalSecond: {
            width: "50%",
            '& img':{
                height: '430px !important',
                borderRadius: '15px',
            },
            '@media (max-width: 820px)': {
                display:'none'
            },

        },
        imageStyles:{
            width: '100%',
            objectFit: 'cover',
            maxWidth:'450px',
        },
        horizontalFirst: {
            width: '50%',
            display:'flex',
            flexDirection:'column',
            gap:'10px',

        },
        horizontalFirstImg:{
            '& img':{
                height: '210px !important',
                borderRadius: '15px',
            },

            //marginBottom: '10px',
        },
        horizontalText: {
            width: '100%',
            maxWidth: '450px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '210px',
            //border: `2px solid ${Colors.purple}`,
            borderRadius: '15px',
            textAlign: 'center',
            position: 'relative',
            '&::before': {
                content: '""',

            },


            '& p':{
                fontSize: '20px',
                marginLeft: '20px',
                marginRight: '20px',
                fontWeight: '300',
            }

        },
        leftTopCorner:{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '60px',
            height: '60px',
            borderTop: '10px solid black',
            borderLeft: '10px solid black',
        },
        leftBottomCorner:{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '60px',
            height: '60px',
            borderBottom: '10px solid black',
            borderLeft: '10px solid black',
        },
        rightTopCorner:{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '60px',
            height: '60px',
            borderTop: '10px solid black',
            borderRight: '10px solid black',
        },
        rightBottomCorner:{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '60px',
            height: '60px',
            borderBottom: '10px solid black',
            borderRight: '10px solid black',
        },


        leftTopCornerInside:{
            position: 'absolute',
            top: '25px',
            left: '25px',
            width: '20px',
            height: '20px',
            borderTop: '3px solid black',
            borderLeft: '3px solid black',
        },
        leftBottomCornerInside:{
            position: 'absolute',
            bottom: '25px',
            left: '25px',
            width: '20px',
            height: '20px',
            borderBottom: '3px solid black',
            borderLeft: '3px solid black',
        },
        rightTopCornerInside:{
            position: 'absolute',
            top: '25px',
            right: '25px',
            width: '20px',
            height: '20px',
            borderTop: '3px solid black',
            borderRight: '3px solid black',
        },
        rightBottomCornerInside:{
            position: 'absolute',
            bottom: '25px',
            right: '25px',
            width: '20px',
            height: '20px',
            borderBottom: '3px solid black',
            borderRight: '3px solid black',
        },






        rightFirst: {
            width: "50%",
            '& img':{
                height: '430px !important',
                borderRadius: '15px',
            },
            '@media (max-width: 820px)': {
                display:'none'
            },
        },

        secondRowContainer: {
            display: "flex",
            margin: '10px 40px',
            gap:'20px',
        },
        leftSecond:{
            width: '50%',
            display: 'flex',
            gap:'10px',
            '@media (max-width: 820px)': {
                width: '100%',
            },
        },
        horizontalSecond:{
            width: '50%',
            gap:'10px',
            display: 'flex',
            flexDirection: 'column',
            '@media (max-width: 820px)': {
                width: '100%',
            },
        },
        rightSecond:{
            display: 'flex',
            width: '50%',
            gap:'10px',
            '@media (max-width: 820px)': {
                width: '100%',
            },
        },







        thirdRowContainer: {
            margin: '0',
            paddingBottom:'60px',
            borderBottom:`2px solid ${Colors.gray}`
        },

    })