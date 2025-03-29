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
            fontSize: '72px',
            fontWeight: 'bold',
        },
        contentContainer:{
            display:'flex',
            justifyContent: 'center',
        },
        content:{
            maxWidth: '30%',
            padding: '0 40px 40px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
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
        },
        icon:{
            height: '100px',
            marginBottom: '10px',
        },
        elementTitle:{
            fontSize: '36px',
            fontWeight: '500',
            marginBottom: '20px',
        },
        elementDescription:{
            fontSize: '22px',
            fontWeight: '300',
        },
    })
