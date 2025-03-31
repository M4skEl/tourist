import {createStyles} from "@/utils/createStyles";

export const styles = () =>
    createStyles({
        sectionContainer:{
            margin: '100px 40px 40px',
        },
        titleContainer:{
            margin: '0 40px 40px',
            display: 'flex',
            justifyContent: 'center',

        },
        title:{
            fontSize: '70px',
            fontWeight: 'bold',
            '@media (max-width: 1100px)': {
                fontSize: '48px',
                textAlign: 'center',
            },
            '@media (max-width: 820px)': {
                fontSize: '48px',
                textAlign: 'center',
            },
        },
        contentContainer:{
            display:'flex',
            justifyContent: 'center',
            '@media (max-width: 1100px)': {
                justifyContent: 'space-between',
            },
            '@media (max-width: 820px)': {
                flexDirection: 'column',
            },
        },
        content:{
            maxWidth: '30%',
            padding: '0 40px 40px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            '@media (max-width: 1100px)': {
                padding: '0 10px 40px',
            },
            '@media (max-width: 820px)': {
                maxWidth: '100%',
                paddingTop:'40px',
            },
        },
        contentMiddle:{
            maxWidth: '30%',
            padding: '0 40px 40px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            borderLeft: '2px solid black',
            borderRight: '2px solid black',

            '@media (max-width: 1100px)': {
                padding: '0 10px 40px',
            },
            '@media (max-width: 820px)': {
                maxWidth: '100%',
                borderTop: '2px solid black',
                borderBottom: '2px solid black',
                borderLeft: 'none',
                borderRight: 'none',
                padding: '40px 40px 40px',
            },
        },
        icon:{
            height: '100px',
            marginBottom: '10px',
        },
        elementTitle:{
            fontSize: '36px',
            fontWeight: '500',
            marginBottom: '20px',
            '@media (max-width: 1100px)': {
                fontSize: '30px',
            },
        },
        elementDescription:{
            fontSize: '22px',
            fontWeight: '300',
        },
    })
