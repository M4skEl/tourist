'use client'
import React from 'react'
import {Typography, Box} from '@mui/material'
import {styles} from "@/components/Additions/Additions.styles";

const Additions = () => {


    const {
        sectionContainer,
        titleContainer,
        title,
        contentContainer,
        content,
        contentMiddle,
        icon,
        elementTitle,
        elementDescription,
    } = styles()


    return (
        <Box component={'section'} sx={sectionContainer} id={'additions'}>
            <Box sx={titleContainer}>
                <Typography sx={title}>
                    {'Наши дополнения к путевкам'}
                </Typography>
            </Box>
            <Box sx={contentContainer}>
                <Box sx={content}>
                    <Box component={'img'} sx={icon} src={'/icons/location.png'} />
                    <Typography sx={elementTitle}>
                        {'Добавьте локацию'}
                    </Typography>

                    <Typography sx={elementDescription}>
                        {'Хотите больше фото?'}<br/>
                        {'Добавьте больше локаций из предложенных'}
                    </Typography>
                </Box>

                <Box sx={contentMiddle}>
                    <Box component={'img'} sx={icon} src={'/icons/camera.png'} />
                    <Typography sx={elementTitle}>
                        {'Свое фото'}
                    </Typography>

                    <Typography sx={elementDescription}>
                        {'Есть фото из прошлого?'}<br/>
                        {'Можем повторить спустя годы но в том же месте'}
                    </Typography>
                </Box>

                <Box sx={content}>
                    <Box component={'img'} sx={icon} src={'/icons/photos.png'} />
                    <Typography sx={elementTitle}>
                        {'Моментальное фото'}
                    </Typography>

                    <Typography sx={elementDescription}>
                        {'Хотите уйти с готовыми фото?'}<br/>
                        {'Мы можем сделать его на камеру моментальной печати'}
                    </Typography>
                </Box>

            </Box>

        </Box>
    )
}

export default Additions
