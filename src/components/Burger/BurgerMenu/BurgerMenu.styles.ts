import {createStyles} from "@/utils/createStyles";
import Colors from "@/utils/Colors";

export const styles = () =>
    createStyles({
        mainContainer:{
            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 99999999,
            width: "100vw",
            height: "100%",
            backgroundColor: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            //overflow: 'hidden', // Скрываем выходящий за пределы контент
        },
        modalContainer:{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            backgroundColor: Colors.green,
        },
        crossContainer:{
            position: 'absolute',
            right: '15px',
            top: '15px',
            width: '36px',
            height: '36px',
            background: 'rgba(0, 0, 0, 0.04)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            ':hover': {
                opacity: 0.8,
            }
        },
        cross:{
            width: '15px',
            height: '15px',
        },
        contentContainer:{
            margin:'40px 10px'
        },

        navList:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        listItem:{
        },
        linkItem: {
            textDecoration: 'none',

            width: '100%',
            //maxWidth: '155px',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize:'16px',

        },
        linkText:{
            fontSize:'20px',
            whiteSpace: 'nowrap',
            color: Colors.white,
            fontWeight: '300',
        },
        navigation:{},
    })