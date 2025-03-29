import {createStyles} from "@/utils/createStyles";

export const styles = () =>
    createStyles({
        mainContainer: {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 99999999,
            width: "100vw",
            height: "100%",
            backgroundColor: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },

        modalContainer: {
            maxWidth: '680px',
            //height: '500px',
            backgroundColor: 'white',
            padding: '40px 70px 50px',
            borderRadius: '15px',
            position: 'relative',
        },
        crossContainer:{
            position: 'absolute',
            right: '20px',
            top: '20px',
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
            width: '12px',
            height: '12px',
        },
        modalTitle: {
            fontSize: '24px',
            marginBottom: '30px',
        },

        formContainer: {},
        inputContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap:'5px',
            marginBottom:'10px',
        },
        label: {
            fontSize: '16px',
        },

        input: {
            width: '100%',
            height: '40px',
            fontSize: '16px',
            boxSizing: 'border-box',
            border:'1px solid black',
            borderRadius: '10px',
            '&:focus-visible': {
                border: '1px solid transparent',
            },

            '&::placeholder': {
                fontSize: '16px',
            }
        },
        textareaContainer:{
            display: 'flex',
            flexDirection: 'column',
            gap:'5px',
            marginBottom:'50px',
        },
        textareaField:{
            width: '100%',
            height: '130px',
            boxSizing: 'border-box',
            border:'1px solid black',
            borderRadius: '10px',
            '&:focus-visible': {
                border: '1px solid transparent',
            },

            '&::placeholder': {
                fontSize: '16px',
            }
        },

        buttonContainer: {
            width: '100%',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        button: {
            padding: '10px 20px',
            position: 'relative',
            fontSize: '24px',
            backgroundColor: 'transparent',
            color: 'black',
            //fontWeight: 'bold',
            transition: 'all .3s',
            cursor: 'pointer',
            "&:hover": {
               // backgroundColor: 'white',
                //padding: '15px',
                fontSize: '28px',
                //opacity: 0.8,
            },
        },

        leftTopCornerButton: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '15px',
            height: '15px',
            borderTop: '3px solid black',
            borderLeft: '3px solid black',
        },
        leftBottomCornerButton: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '15px',
            height: '15px',
            borderBottom: '3px solid black',
            borderLeft: '3px solid black',
        },
        rightTopCornerButton: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '15px',
            height: '15px',
            borderTop: '3px solid black',
            borderRight: '3px solid black',
        },
        rightBottomCornerButton: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '15px',
            height: '15px',
            borderBottom: '3px solid black',
            borderRight: '3px solid black',
        },
    })