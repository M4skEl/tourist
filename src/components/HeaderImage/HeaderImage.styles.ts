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
            zIndex:'999',
            position: 'relative',
        },

        imageContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '30px 40px',
        },
        image: {
            height: '400px',
            '@media (max-width: 510px)': {
                height: '300px',
            },
        },
        descriptionContainer:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        title:{
            fontSize: '70px',
            fontWeight: '700',
            '@media (max-width: 768px)': {
                fontSize: '48px',
            },
            '@media (max-width: 500px)': {
                fontSize: '36px',
            },
        },
        description:{
            fontSize: '24px',
            fontWeight: '300',
            margin: '0',
            lineHeight: '28px',
            color: Colors.white,
            '@media (max-width: 768px)': {
                fontSize: '20px',
                lineHeight: '24px',
            },
            '@media (max-width: 500px)': {
                fontSize: '18px',
            },
        },
    })
