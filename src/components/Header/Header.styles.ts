import {createStyles} from "@/utils/createStyles";
import Colors from "@/utils/Colors";

export const styles = () =>
    createStyles({
        backgroundContainer: {
            width: '100%',
            height: '100vh',
            background: Colors.white,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999999,

        },
        sectionContainer:{
            position: 'sticky',
            top: 0,
            left: 0,
            padding: '0 40px',
            backgroundColor: Colors.white,
            zIndex: 999999,
            '@media (max-width: 768px)': {
            display: 'none',
                },
        },
        container: {
            position: 'sticky',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
            borderRadius: '0 0 15px 15px',
            paddingTop:'25px',
            paddingBottom:'10px',
            '@media (max-width: 1100px)': {
                paddingTop:'10px',
            },

        },
        navListContainer:{
            display: 'flex',
            width:'100%',
            gap:'50px',
            '& nav':{
                display: 'flex',
                width:'100%',

            }
        },
        navigation:{
            display: 'flex',
            width:'100%',
            '@media (max-width: 1100px)': {
                flexDirection: 'column',
            },
        },
        navList:{
            display: 'flex',
            flex: '1 1 50%',
            //width:'50%',
            justifyContent: 'space-between',
            //border: `2px solid ${Colors.purple}`,
            marginRight:'50px',
            borderRadius: '15px',
            gap:'50px',
            '@media (max-width: 1100px)': {
                width:'100%',
                marginRight:'0',
            },

        },
        listItem:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:'50px',


            "&:hover":{
                opacity:0.8,
                '& div': {
                    opacity:0.8,
                },
            },

        },
        linkItem: {
            textDecoration: 'none',
            backgroundColor: Colors.white,
            width: '100%',
            //maxWidth: '155px',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize:'16px',

        },

        leftTopCorner:{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '15px',
            height: '15px',
            borderTop: '3px solid black',
            borderLeft: '3px solid black',
        },
        leftBottomCorner:{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '15px',
            height: '15px',
            borderBottom: '3px solid black',
            borderLeft: '3px solid black',
        },
        rightTopCorner:{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '15px',
            height: '15px',
            borderTop: '3px solid black',
            borderRight: '3px solid black',
        },
        rightBottomCorner:{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '15px',
            height: '15px',
            borderBottom: '3px solid black',
            borderRight: '3px solid black',
        },

        linkText:{
            fontSize:'20px',
            whiteSpace: 'nowrap',
        },

        orderLink:{
            //width: '50%',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',

            flex: '1 1 50%',

        },
        orderItem:{
            position: 'relative',
            width:'100%',
            //margin:'10px 20px 10px 20px',
            //background:Colors.purple,
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding:'10px 20px 10px 20px',
            borderRadius: '10px',

            cursor: 'pointer',

            //color: 'white',
            "&:hover":{
                opacity:0.8,
            },
        },

        leftTopCornerOrder:{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '15px',
            borderTop: '3px solid black',
            borderLeft: '3px solid black',
            background:'transparent',
        },
        leftBottomCornerOrder:{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '15px',
            borderBottom: '3px solid black',
            borderLeft: '3px solid black',
            background:'transparent',
        },
        rightTopCornerOrder:{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '15px',
            borderTop: '3px solid black',
            borderRight: '3px solid black',
            background:'transparent',
        },
        rightBottomCornerOrder:{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '100%',
            height: '15px',
            borderBottom: '3px solid black',
            borderRight: '3px solid black',
            background:'transparent',
        },

        orderText:{
            fontSize:'20px',
            zIndex:2,
        },
    })
