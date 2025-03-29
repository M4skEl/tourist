'use client'
import React from 'react'
import {Typography, Box, List, ListItem} from '@mui/material'
import {styles} from "@/components/Header/Header.styles";
import Link from "next/link";


const Header = () => {


    const {
        sectionContainer,
        container,
        navListContainer,
        navList,
        listItem,
        linkItem,
        linkText,
        navigation,
        leftTopCorner,
        leftBottomCorner,
        rightTopCorner,
        rightBottomCorner,

        leftTopCornerOrder,
        leftBottomCornerOrder,
        rightTopCornerOrder,
        rightBottomCornerOrder,

        orderLink,
        orderItem,
        orderText,


    } = styles()


    return (
        <Box component={'header'} sx={sectionContainer} id={'catcher'}>
            <Box sx={container}>
                <Box sx={navListContainer}>
                    <Box component={'nav'} sx={navigation}>
                        <List sx={navList}>

                            <Link href={'/#info'} style={linkItem}>
                                <ListItem sx={listItem}>
                                    <Box sx={leftTopCorner}/>
                                    <Box sx={leftBottomCorner}/>

                                    <Typography component={'span'} sx={linkText}>
                                        {'Почему мы'}
                                    </Typography>

                                    <Box sx={rightTopCorner}/>
                                    <Box sx={rightBottomCorner}/>
                                </ListItem>
                            </Link>

                            <Link href={'/#tours'} style={linkItem}>
                                <ListItem sx={listItem}>
                                    <Box sx={leftTopCorner}/>
                                    <Box sx={leftBottomCorner}/>
                                    <Typography component={'span'} sx={linkText}>
                                        {'Путевки'}
                                    </Typography>
                                    <Box sx={rightTopCorner}/>
                                    <Box sx={rightBottomCorner}/>
                                </ListItem>
                            </Link>
                            { <Link href={'/#photos'} style={linkItem}>
                                <ListItem sx={listItem}>
                                    <Box sx={leftTopCorner}/>
                                    <Box sx={leftBottomCorner}/>
                                    <Typography component={'span'} sx={linkText}>
                                        {'Атмосфера'}
                                    </Typography>
                                    <Box sx={rightTopCorner}/>
                                    <Box sx={rightBottomCorner}/>
                                </ListItem>
                            </Link>}
                            <Link href={'/#partnership'} style={linkItem}>
                                <ListItem sx={listItem}>
                                    <Box sx={leftTopCorner}/>
                                    <Box sx={leftBottomCorner}/>
                                    <Typography component={'span'} sx={linkText}>
                                        {'Контакты'}
                                    </Typography>
                                    <Box sx={rightTopCorner}/>
                                    <Box sx={rightBottomCorner}/>
                                </ListItem>
                            </Link>

                        </List>
                        <Box sx={orderLink}>
                            <a href={'/#booking'} style={orderItem}>
                                <Box sx={leftTopCornerOrder}/>
                                <Box sx={leftBottomCornerOrder}/>
                                <Typography component={'span'} sx={orderText}>
                                    {'Забронировать'}
                                </Typography>
                                <Box sx={rightTopCornerOrder}/>
                                <Box sx={rightBottomCornerOrder}/>
                            </a>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Header
