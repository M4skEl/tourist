'use client'
import React from 'react'
import {Typography, Box} from '@mui/material'
import {styles} from "@/components/HeaderImage/HeaderImage.styles";
import {Burger} from "@/components/Burger";
import {BurgerMenu} from "@/components/Burger/BurgerMenu";

const Header = () => {


    const {
        sectionContainer,
        imageContainer,
        image,
        descriptionContainer,
        title,
        description,
    } = styles()

    const [showBurgerMenu, setShowBurgerMenu] = React.useState(false)

    const handleOpen = () => {
        setShowBurgerMenu(true)
    }
    const handleClose = () => {
        setShowBurgerMenu(false)
    }

    return (
        <>
        <Box component={'section'} sx={sectionContainer}>
            <Burger onOpen={handleOpen} />
            <Box sx={imageContainer}>
                <Box component={'img'} sx={image} src={'/Logo_1.png'}></Box>

            </Box>
            <Box sx={descriptionContainer}>
                <Typography sx={title}>{'РЕТРОСПЕКТИВА'}</Typography>
                <Typography sx={description}>{'фотоэкскурсии по городу'}</Typography>
                <Typography sx={description}>{'на ретроавтомобиле'}</Typography>
            </Box>
        </Box>
            {showBurgerMenu && <BurgerMenu onClose={handleClose}/>}
        </>
    )
}

export default Header
