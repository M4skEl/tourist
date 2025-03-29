'use client'
import React from 'react'
import {Typography, Box} from '@mui/material'
import {styles} from "@/components/HeaderImage/HeaderImage.styles";



const Header = () => {


    const {
        sectionContainer,
        imageContainer,
        image,
        descriptionContainer,
        title,
        description,
    } = styles()


    return (
        <Box component={'section'} sx={sectionContainer}>
            <Box sx={imageContainer}>
                <Box component={'img'} sx={image} src={'/Logo_1.png'}></Box>

            </Box>
            <Box sx={descriptionContainer}>
                <Typography sx={title}>{'РЕТРОСПЕКТИВА'}</Typography>
                <Typography sx={description}>{'фотоэкскурсии по городу'}</Typography>
                <Typography sx={description}>{'на ретроавтомобиле'}</Typography>
            </Box>
        </Box>
    )
}

export default Header
