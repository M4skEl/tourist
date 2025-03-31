import {createStyles} from "@/utils/createStyles";
import Colors from "@/utils/Colors";

export const styles = () =>
    createStyles({
        sectionContainer: {
            position: "relative",
            overflow: "hidden",
        },
        titleContainer:{
            width:"100%",
            display:"flex",
            justifyContent:"center",
        },
        title:{
            fontSize: '70px',
            fontWeight: 700,
            margin: '0 auto',
            '@media (max-width: 768px)': {
                fontSize: '48px',
                margin: '0 40px',
            },
        },
        background:{
            backgroundColor: Colors.green,
            position: "absolute",
            top:'250px',
            zIndex:'-1',
            width:'100%',
            height:'100%',
        },

    })