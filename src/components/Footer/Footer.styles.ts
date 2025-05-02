import {createStyles} from "@/utils/createStyles";
import Colors from "@/utils/Colors";

export const styles = () =>
  createStyles({
    sectionContainer: {
      padding: '40px 40px 40px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: Colors.green,
    },

    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      //marginBottom: '40px',
      lineHeight: '70px',
      color: Colors.white,
      '@media (max-width: 600px)': {
        fontSize: '32px',
      },
    },
    contentContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      position: 'relative',

      //maxWidth: '1080px',
      width: '100%',
      margin: '0 40px',
      paddingTop: '40px',
      borderTop: `2px solid ${Colors.gray}`,
    },

    socialsContainer: {
      display: 'flex',
      width: '25%',
      marginTop: '70px',
      //justifyContent: 'flex-end',
      alignItems: 'flex-end',
      //flexDirection: 'column',
    },
    socialLink: {
      marginTop: '70px',
    },
    socialLinkImg: {
      width: '50px',
      height: '50px',
      '@media (max-width: 500px)': {
        width: '40px',
        height: '40px',
        minWidth: '40px',
        minHeight: '40px',
      },
    },
    descriptionContainer: {
      textAlign: 'center',
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      '@media (max-width: 1100px)': {
        width: '75%',
      },


    },
    description: {
      fontSize: '22px',
      lineHeight: '30px',
      color: Colors.white,
      fontWeight: 300,
      //marginBottom: '20px',
      //opacity:.8,
      '@media (max-width: 600px)': {
        fontSize: '18px',
      },
    },


    firstRow: {
      display: 'flex',
      width: '100%',
      gap: '80px',
      justifyContent: 'center',
    },
    secondRow: {
      display: 'flex',
      width: '100%',
      gap: '40px',
      justifyContent: 'center',

    },
    linksContainer: {
      // width: '30%',
      //marginTop: '140px',
      display: 'flex',
      flexDirection: 'column',
      //gap: '10px',
    },
    link: {
      fontSize: '24px',
      cursor: 'pointer',
      color: '#5c5c5c',
      fontWeight: '300',
      '&:hover': {
        opacity: .8,
      }
    },
    linkText: {
      fontWeight: '300',
      fontSize: '20px',
      '&:hover': {
        opacity: .8,
      }
    },


    GovermentContainer: {
      marginTop: '150px',
      '@media (max-width: 768px)': {
        maxWidth: '100%',
      },


    },
    governmentDescription: {

      // padding: '0 40px',
      fontSize: '12px',
      fontWeight: '300',
      color: Colors.white,
      paddingRight: '100px',
    },
    logotype: {
      width: '100px',
      objectFit: 'contain',
    },
    governmentContainer: {
      marginTop: '40px',
      display:'flex',
      gap:'5px',
     alignItems: 'center',
    },
    contactsContainer: {
      display: 'flex',
      gap: '10px',
      flexDirection: 'column',
      alignItems: 'center',
      //marginTop: '70px',
      //width: '25%',
      marginTop: '30px',
      '@media (max-width: 650px)': {
        gap: '5px',
      },
    },
    contactsRow: {
      display: 'flex',
      gap: '50px',
      '@media (max-width: 650px)': {
        flexDirection: 'column',
        gap: '5px',
        alignItems: 'center',
      },
    },
    contacts: {
      //width: '25%',
      textAlign: 'left',
      color: Colors.white,
      fontSize: '14px',
      fontWeight: '300',
      textWrap: 'nowrap',
    },
  })
