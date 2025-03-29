import {createStyles} from "@/utils/createStyles";
import Colors from "@/utils/Colors";

export const styles = () =>
    createStyles({
        sectionContainer: {
            width: "100%",
            paddingTop:"100px",
            backgroundColor: Colors.green,
            color:Colors.beige,
            borderBottom:`2px solid black`,
        },
        titleContainer:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            margin:'0 40px',
            marginBottom:'50px',
        },
        title:{
            fontSize: "80px",
            //fontFamily: "'Montserrat', sans-serif",
            fontWeight: '700',
            lineHeight: '80px',
            marginBottom:'50px',
        },


        contentContainer:{
            margin:"0 40px",
            paddingBottom:"50px",

        },
        row:{
            display:"flex",
            gap:'40px',
            width:'100%',
            marginBottom:'40px',
        },
        leftContainer:{
            width:'50%',
            display:'flex',
            gap:'20px',
        },
        imageContainer:{
            width:'50%',
            '& img':{
                height: '450px !important',
                borderRadius: '15px',
            },
        },
        imageStyles:{
            maxWidth: '100%',
            objectFit: 'cover'
        },
        textContainer:{
            width: '50%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            position:'relative',

            //padding:'50px 50px',
            //boxSizing:'border-box',
        },
        textContentContainer:{
            padding:'50px 50px',
            boxSizing:'border-box',
            height:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
        },
        leftTopCorner:{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '60px',
            height: '60px',
            borderTop: `10px solid ${Colors.beige}`,
            borderLeft: `10px solid ${Colors.beige}`,
        },
        leftBottomCorner:{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '60px',
            height: '60px',
            borderBottom: `10px solid ${Colors.beige}`,
            borderLeft: `10px solid ${Colors.beige}`,
        },
        rightTopCorner:{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '60px',
            height: '60px',
            borderTop: `10px solid ${Colors.beige}`,
            borderRight: `10px solid ${Colors.beige}`,
        },
        rightBottomCorner:{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '60px',
            height: '60px',
            borderBottom: `10px solid  ${Colors.beige}`,
            borderRight: `10px solid ${Colors.beige}`,
        },


        leftTopCornerInside:{
            position: 'absolute',
            top: '25px',
            left: '25px',
            width: '20px',
            height: '20px',
            borderTop: `3px solid ${Colors.beige}`,
            borderLeft: `3px solid ${Colors.beige}`,
        },
        leftBottomCornerInside:{
            position: 'absolute',
            bottom: '25px',
            left: '25px',
            width: '20px',
            height: '20px',
            borderBottom: `3px solid ${Colors.beige}`,
            borderLeft: `3px solid ${Colors.beige}`,
        },
        rightTopCornerInside:{
            position: 'absolute',
            top: '25px',
            right: '25px',
            width: '20px',
            height: '20px',
            borderTop: `3px solid ${Colors.beige}`,
            borderRight: `3px solid ${Colors.beige}`,
        },
        rightBottomCornerInside:{
            position: 'absolute',
            bottom: '25px',
            right: '25px',
            width: '20px',
            height: '20px',
            borderBottom: `3px solid ${Colors.beige}`,
            borderRight: `3px solid ${Colors.beige}`,
        },




        textTitle:{
            fontSize: '24px',

        },
        textDescription:{
            fontSize: '18px',
            opacity:'0.8',
            marginBottom:'30px',
            fontWeight:300,
        },
        textDescriptionTitle:{
            fontSize: '18px',
            fontWeight:300,

        },
        rightContainer:{
            width:'50%',
            display:'flex',
            gap:'20px',

        },


    })