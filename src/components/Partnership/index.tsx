'use client'
import React from 'react'
import {Typography, Box, Button} from '@mui/material'
import {styles} from "@/components/Partnership/Partnership.style";
import {PartnerModal} from "@/components/PartnerModal";

const Partnership = () => {

    const [showModal, setShowModal] = React.useState(false);

    const {
        sectionContainer,
        titleContainer,
        title,
        contentContainer,

        leftTopCorner,
        leftBottomCorner,
        rightTopCorner,
        rightBottomCorner,

        leftTopCornerInside,
        leftBottomCornerInside,
        rightTopCornerInside,
        rightBottomCornerInside,

        descriptionContainer,
        description,
        bottomBlock,

        listContainer,
        listItem,
        buttonContainer,
        button,
        leftTopCornerButton,
        leftBottomCornerButton,
        rightTopCornerButton,
        rightBottomCornerButton,


    } = styles()

    const handeleOnClick = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
        <Box component={'section'} sx={sectionContainer} id={'partnership'}>
            <Box sx={titleContainer}>
                <Typography sx={title}>
                    {'Партнерам'}
                </Typography>
            </Box>
            <Box sx={contentContainer}>
                <Box sx={leftTopCorner}/>
                <Box sx={leftBottomCorner}/>
                <Box sx={leftTopCornerInside}/>
                <Box sx={leftBottomCornerInside}/>
                <Box sx={descriptionContainer}>
                    <Box sx={description}>
                        {'Мы готовы к сотрудничеству со всеми, кому не безразличны история\n' +
                            'Архангельска и её популяризация в широких массах. Готовы к\n' +
                            'предложениям:\n'}
                    </Box>
                    <Box sx={bottomBlock}>
                    <Box sx={listContainer}>
                        <Typography sx={listItem}>
                            {'Разработка совместных проектов'}
                        </Typography>
                        <Typography sx={listItem}>
                            {'Разработка проектов под заказ'}
                        </Typography>
                        <Typography sx={listItem}>
                            {'Включение маршрутов в программы ваших мероприятий'}
                        </Typography>
                        <Typography sx={listItem}>
                            {'Многое другое…'}
                        </Typography>
                    </Box>
                    </Box>
                    <Box sx={buttonContainer}>
                        <Button sx={button} onClick={() => handeleOnClick()}>
                            <Box sx={leftTopCornerButton}/>
                            <Box sx={leftBottomCornerButton}/>
                            {'Заполнить заявку'}
                            <Box sx={rightTopCornerButton}/>
                            <Box sx={rightBottomCornerButton}/>
                        </Button>
                    </Box>
                </Box>
                <Box sx={rightTopCornerInside}/>
                <Box sx={rightBottomCornerInside}/>
                <Box sx={rightTopCorner}/>
                <Box sx={rightBottomCorner}/>
            </Box>

        </Box>
            {showModal && <PartnerModal onClose={handleClose}/>}
        </>
    )
}

export default Partnership
