import {createStyles} from "@/utils/createStyles";
import Colors from "@/utils/Colors";

export const styles = () =>
    createStyles({
        container: {
            position: "fixed",
            top: '20px',
            right: '20px',
            background: Colors.white,
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            minWidth: '48px',
            minHeight: '48px',

            flexDirection: 'column',
            gap:'4px',
            alignItems: 'center',
            justifyContent: 'center',
            ZIndex: '99999',
            display:'none',
            '@media (max-width: 768px)': {
                display: 'flex',
            },
        },
        row:{
            width: '22px',
            height: '2px',
            backgroundColor: Colors.green,
            //borderRadius: '2px',
        },
    })