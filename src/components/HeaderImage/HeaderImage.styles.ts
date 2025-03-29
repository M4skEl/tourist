import {createStyles} from "@/utils/createStyles";
import Colors from "@/utils/Colors";

export const styles = () =>
    createStyles({

        sectionContainer: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '70px',
            paddingTop: '30px',
            backgroundColor: Colors.green,
            color: Colors.dark,
            borderBottom: `2px solid ${Colors.dark}`,
        },

        imageContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '30px 40px',
        },
        image: {
            height: '400px',
        },
        descriptionContainer:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        title:{
            fontSize: '70px',
            fontWeight: '700',
        },
        description:{
            fontSize: '24px',
            fontWeight: '300',
            margin: '0',
            lineHeight: '28px',
            color: Colors.white,
        },
    })
