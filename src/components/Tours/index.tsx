'use client'
import React from 'react'
import {Typography, Box, List, ListItem} from '@mui/material'
import {styles} from "@/components/Tours/Tours.styles";
import Image from "next/image";
import ImageSlider from "@/components/Tours/Courusel/courusel";


const Header = () => {


    const {
        sectionContainer,
        titleContainer,
        title,
        contentContainer,
        imageContainer,
        tourContainer,
        imageStyles,

        leftTopCorner,
        leftBottomCorner,
        rightTopCorner,
        rightBottomCorner,

        leftTopCornerInside,
        leftBottomCornerInside,
        rightTopCornerInside,
        rightBottomCornerInside,

        descriptionContainer,
        descriptionTitle,
        descriptionText,
        listContainer,
        listItem,
        listTextBold,
        listText,
    } = styles()


    return (
        <Box component={'section'} sx={sectionContainer} id={'tours'}>
            <Box sx={titleContainer}>
                <Typography sx={title}>
                    {'Наши путевки'}
                </Typography>
            </Box>
            <Box sx={contentContainer}>
                <Box sx={tourContainer}>


                    <Box sx={imageContainer}>
                        <Box sx={leftTopCorner}/>
                        <Box sx={leftBottomCorner}/>
                        <Box sx={leftTopCornerInside}/>
                        <Box sx={leftBottomCornerInside}/>

                        <ImageSlider
                            images={[
                                '/Arkh/old_chumb.webp',
                                '/Arkh/old_chumb.webp',
                                '/Arkh/old_chumb.webp',
                                '/Arkh/old_chumb.webp',
                                '/Arkh/old_chumb.webp',
                                '/Arkh/old_chumb.webp',
                            ]}/>
                        {/*<Image
                            src={'/Arkh/old_chumb.webp'}
                            alt={'feature'}
                            priority={true}
                            layout={'responsive'}
                            width={450}
                            height={430}
                            style={imageStyles}
                        />*/}
                        <Box sx={rightTopCornerInside}/>
                        <Box sx={rightBottomCornerInside}/>
                        <Box sx={rightTopCorner}/>
                        <Box sx={rightBottomCorner}/>
                    </Box>




                    <Box sx={descriptionContainer}>
                        <Typography sx={descriptionTitle}>
                            {'От вокзала до вокзала'}
                        </Typography>
                        <Typography sx={descriptionText}>
                            {'История развернется мужду двумя вокзалами Архангельска. Вы погрузиться в 80 годы прошлого века, узнаете про жизнь города.'}
                        </Typography>
                        <Box sx={listContainer}>

                            <Box sx={listItem}>
                                <Typography sx={listTextBold}>
                                    {'Формат'}
                                </Typography>
                                <Typography sx={listText}>
                                    {'автомобильный'}
                                </Typography>
                            </Box>

                            <Box sx={listItem}>
                                <Typography sx={listTextBold}>
                                    {'Длительность'}
                                </Typography>
                                <Typography sx={listText}>
                                    {'1,5 часа'}
                                </Typography>
                            </Box>

                            <Box sx={listItem}>
                                <Typography sx={listTextBold}>
                                    {'Участников'}
                                </Typography>
                                <Typography sx={listText}>
                                    {'до 4х человек'}
                                </Typography>
                            </Box>

                            <Box sx={listItem}>
                                <Typography sx={listTextBold}>
                                    {'Стоимость'}
                                </Typography>
                                <Typography sx={listText}>
                                    {'от 3000 ₽ за экскурсию'}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>

                <Box sx={tourContainer}>


                    <Box sx={imageContainer}>
                        <Box sx={leftTopCorner}/>
                        <Box sx={leftBottomCorner}/>
                        <Box sx={leftTopCornerInside}/>
                        <Box sx={leftBottomCornerInside}/>

                        <ImageSlider
                            images={[
                                '/Arkh/old_chumb.webp',
                                '/Arkh/old_chumb.webp',
                                '/Arkh/old_chumb.webp',
                                '/Arkh/old_chumb.webp',
                                '/Arkh/old_chumb.webp',
                                '/Arkh/old_chumb.webp',
                            ]}
                            slideInterval={20000}
                        />
                        <Box sx={rightTopCornerInside}/>
                        <Box sx={rightBottomCornerInside}/>
                        <Box sx={rightTopCorner}/>
                        <Box sx={rightBottomCorner}/>
                    </Box>



                    <Box sx={descriptionContainer}>
                        <Typography sx={descriptionTitle}>
                            {'От вокзала до вокзала'}
                        </Typography>
                        <Typography sx={descriptionText}>
                            {'История развернется мужду двумя вокзалами Архангельска. Вы погрузиться в 80 годы прошлого века, узнаете про жизнь города.'}
                        </Typography>
                        <Box sx={listContainer}>

                            <Box sx={listItem}>
                                <Typography sx={listTextBold}>
                                    {'Формат'}
                                </Typography>
                                <Typography sx={listText}>
                                    {'автомобильный'}
                                </Typography>
                            </Box>

                            <Box sx={listItem}>
                                <Typography sx={listTextBold}>
                                    {'Длительность'}
                                </Typography>
                                <Typography sx={listText}>
                                    {'1,5 часа'}
                                </Typography>
                            </Box>

                            <Box sx={listItem}>
                                <Typography sx={listTextBold}>
                                    {'Участников'}
                                </Typography>
                                <Typography sx={listText}>
                                    {'до 4х человек'}
                                </Typography>
                            </Box>

                            <Box sx={listItem}>
                                <Typography sx={listTextBold}>
                                    {'Стоимость'}
                                </Typography>
                                <Typography sx={listText}>
                                    {'от 3000 ₽ за экскурсию'}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}

export default Header
