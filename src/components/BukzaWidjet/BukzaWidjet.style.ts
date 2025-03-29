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
            fontSize: '72px',
            fontWeight: 700,
            margin: '0 auto',
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