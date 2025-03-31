import React from 'react'
import {Typography, Box} from '@mui/material'
import {styles} from "@/components/Tours/Tours.styles";
import ImageSlider from "@/components/Tours/Courusel/courusel";


const Header = () => {


    const {
        sectionContainer,
        titleContainer,
        title,
        contentContainer,
        imageContainer,
        tourContainer,
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
                    {'Наши путешествия в прошлое'}
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
                        <Box>
                            <Typography sx={descriptionText}>
                                {'История развернётся в 1980-е годы на пути между железно-дорожным\n' +
                                    'и морским-речным вокзалом города Архангельска. Раньше такой маршрут\n' +
                                    'превращал Архангельск в транзитный город, через который можно было\n' +
                                    'отправиться дальше.\n'}
                            </Typography>
                            <Typography sx={descriptionText}>
                                {'В путешествии вы сможете почувствовать себя гостем, проезжающим\n' +
                                    'город. Вашим спутником будет коренной архангелогородец, который\n' +
                                    'расскажет как про историю города в целом, так и про его жизнь в 80-е годы.\n'}</Typography>
                            <Typography sx={descriptionText}>
                                {
                                    'Данный маршрут подходит для первого знакомства с Архангельском и\n' +
                                    'может называться «обзорным», так как даёт общие основные знания.'}
                            </Typography>
                        </Box>
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
                                    {'от 5000 ₽ за экскурсию'}
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
                            ]}/>

                        <Box sx={rightTopCornerInside}/>
                        <Box sx={rightBottomCornerInside}/>
                        <Box sx={rightTopCorner}/>
                        <Box sx={rightBottomCorner}/>
                    </Box>


                    <Box sx={descriptionContainer}>
                        <Typography sx={descriptionTitle}>
                            {'«Репортаж 1984'}
                        </Typography>
                        <Box>
                            <Typography sx={descriptionText}>
                                {'История разворачивается в год 400-летнего юбилея Архангельска. К\n' +
                                    'этому времени образ города сильно преобразился за счёт масштабного\n' +
                                    'строительства. Эти изменения были широко представлены благодаря работе\n' +
                                    'советских журналистов, публицистов и исследователей. '}
                            </Typography>
                            <Typography sx={descriptionText}>
                                {'В путешествии вы окажитесь в роли корреспондентов одного из\n' +
                                    'советских изданий. Персонажем-спутником будет сотрудник\n' +
                                    'Главархнгельскостроя, который расскажет об изменениях архитектурного\n' +
                                    'облика Архангельска.'}</Typography>
                            <Typography sx={descriptionText}>
                                {'Данный маршрут делает больший акцент на знакомстве с архитектурой\n' +
                                    'советского периода.'}
                            </Typography>
                        </Box>
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
                                    {'от 5000 ₽ за экскурсию'}
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
