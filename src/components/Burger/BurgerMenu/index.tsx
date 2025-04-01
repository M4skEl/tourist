'use client'
import React from 'react'
import {Typography, Box,List, ListItem} from '@mui/material'
import {styles} from "@/components/Burger/BurgerMenu/BurgerMenu.styles";
import useOutsideClick from "@/utils/useOutsideClick";
import Link from "next/link";


interface ModalProps {
    onClose: () => void;
}

export const BurgerMenu = ({onClose}: ModalProps) => {

    const {
        mainContainer,
        modalContainer,
        contentContainer,
        crossContainer,
        cross,

        navList,
        listItem,
        linkItem,
        linkText,
        navigation,
    } = styles()
    const ref = useOutsideClick(onClose);


    return (
        <Box sx={mainContainer}>
            {<Box sx={modalContainer} ref={ref}>
                <Box sx={crossContainer} onClick={()=>{onClose()}}>
                    <Box component={'img'} sx={cross} src={'/icons/CrossIconWhite.svg'}/>
                </Box>

               <Box sx={contentContainer}>
                   <Box component={'nav'} sx={navigation}>
                       <List sx={navList}>

                           <Link href={'/#info'} style={linkItem}>
                               <ListItem sx={listItem}>
                                   <Typography component={'span'} sx={linkText}>
                                       {'Почему мы?'}
                                   </Typography>
                               </ListItem>
                           </Link>

                           <Link href={'/#tours'} style={linkItem}>
                               <ListItem sx={listItem}>
                                   <Typography component={'span'} sx={linkText}>
                                       {'Маршруты'}
                                   </Typography>
                               </ListItem>
                           </Link>
                           { <Link href={'/#partnership'} style={linkItem}>
                               <ListItem sx={listItem}>
                                   <Typography component={'span'} sx={linkText}>
                                       {'Партнерам'}
                                   </Typography>
                               </ListItem>
                           </Link>}
                           <Link href={'/#contacts'} style={linkItem}>
                               <ListItem sx={listItem}>
                                   <Typography component={'span'} sx={linkText}>
                                       {'Контакты'}
                                   </Typography>
                               </ListItem>
                           </Link>
                           <Link href={'/#booking'} style={linkItem}>
                               <ListItem sx={listItem}>
                                   <Typography component={'span'} sx={linkText}>
                                       {'Забронировать'}
                                   </Typography>
                               </ListItem>
                           </Link>

                       </List>

                   </Box>
               </Box>


            </Box>}
        </Box>


    )


}