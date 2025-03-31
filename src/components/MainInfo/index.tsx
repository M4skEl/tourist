import {Box, Typography} from "@mui/material";
import {styles} from "@/components/MainInfo/MainInfo.styles";


const MainInfo = () => {

    const {
        sectionContainer,
        title,
        titleContainer,
        contentContainer,
        row,
        leftContainer,
        imageContainer,
        imageStyles,
        textContainer,
        textContentContainer,

        leftTopCorner,
        leftBottomCorner,
        rightTopCorner,
        rightBottomCorner,

        leftTopCornerInside,
        leftBottomCornerInside,
        rightTopCornerInside,
        rightBottomCornerInside,

        textTitle,
        textDescription,
        textDescriptionTitle,
        rightContainer,
        secondRowContainerReverse,
        secondRowContainerStraight,
    } = styles()


    return (
        <Box component={'section'} sx={sectionContainer} id={'info'}>
            <Box sx={titleContainer}>
                <Typography component='h1' sx={title}>
                    {'Зачем идти на экскурсию с нами?'}
                </Typography>
            </Box>
            <Box sx={contentContainer}>
                <Box sx={row}>
                    <Box sx={leftContainer}>
                        <Box sx={imageContainer}>
                            <Box component={'img'}
                                 src={'/Arkh/two_towers.jpg'}
                                 alt={'feature'}
                                 style={imageStyles}
                            />
                        </Box>
                        <Box sx={textContainer}>
                            <Box sx={leftTopCorner}/>
                            <Box sx={leftBottomCorner}/>
                            <Box sx={leftTopCornerInside}/>
                            <Box sx={leftBottomCornerInside}/>
                            <Box sx={textContentContainer}>
                                <Typography component='h2' sx={textTitle}>
                                    {'Иной формат'}
                                </Typography>
                                <Box>
                                    <Typography component='p' sx={textDescription}>
                                        {'Мы не предлагаем классические экскурсии формата «экскурсовод –\n' +
                                            'экскурсант». Мы даём вам возможность стать непосредственными\n' +
                                            'участниками истории!'}
                                    </Typography>
                                    <Typography component='p' sx={textDescriptionTitle}>
                                        {'Наш формат ближе к тематическим театрализованным прогулкам.\n' +
                                            '«Экскурсовод» - это персонаж-спутник, который погрузит вас в один из\n' +
                                            'исторических сюжетов. А вы, в свою очередь, становитесь частью\n' +
                                            'разворачивающихся перед вами событий прошлого.'}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={rightTopCornerInside}/>
                            <Box sx={rightBottomCornerInside}/>
                            <Box sx={rightTopCorner}/>
                            <Box sx={rightBottomCorner}/>
                        </Box>

                    </Box>
                    <Box sx={rightContainer}>
                        <Box sx={imageContainer}>
                            <Box component={'img'}
                                 src={'/Arkh/first_bus.jpg'}
                                 alt={'feature'}
                                 style={imageStyles}
                            />
                        </Box>
                        <Box sx={textContainer}>
                            <Box sx={leftTopCorner}/>
                            <Box sx={leftBottomCorner}/>
                            <Box sx={leftTopCornerInside}/>
                            <Box sx={leftBottomCornerInside}/>
                            <Box sx={textContentContainer}>
                                <Typography component='h2' sx={textTitle}>
                                    {'Погружение'}
                                </Typography>
                                <Box>
                                    <Typography component='p' sx={textDescription}>
                                        {'Мы не предлагаем смотреть на прошлое с высоты сегодняшнего дня.\n' +
                                            'Мы сделаем всё возможное для усиления ощущения путешествия во времени\n' +
                                            'за счёт реквизита!'}
                                    </Typography>
                                    <Typography component='p' sx={textDescriptionTitle}>
                                        {'Автомобильные путешествия в прошлое проходят не на современном\n' +
                                            'авто, а на настоящем Москвиче 1981 года выпуска. Для дополнения вашего\n' +
                                            'образа мы представляем плащи, которые при этом могут помочь в непогоду.\n' +
                                            'Также дополнительный реквизит зависит от сюжета.'}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={rightTopCornerInside}/>
                            <Box sx={rightBottomCornerInside}/>
                            <Box sx={rightTopCorner}/>
                            <Box sx={rightBottomCorner}/>
                        </Box>
                    </Box>
                </Box>
                <Box sx={row}>
                    <Box sx={secondRowContainerReverse}>
                        <Box sx={leftContainer}>
                            <Box sx={textContainer}>
                                <Box sx={leftTopCorner}/>
                                <Box sx={leftBottomCorner}/>
                                <Box sx={leftTopCornerInside}/>
                                <Box sx={leftBottomCornerInside}/>
                                <Box sx={textContentContainer}>
                                    <Typography component='h2' sx={textTitle}>
                                        {'Фотосъёмка'}
                                    </Typography>
                                    <Box>
                                        <Typography component='p' sx={textDescription}>
                                            {'Мы не предлагаем вам несколько минут свободного времени, чтобы\n' +
                                                'успеть сделать несколько кадров во время прогулок. Мы берём фотосъёмку\n' +
                                                'на себя как обязательство!'}
                                        </Typography>
                                        <Typography component='p' sx={textDescriptionTitle}>
                                            {'Путешествия в прошлое останутся не только в памяти, но и на кадрах.\n' +
                                                'Во всех локациях за съёмку отвечают наши персонажи, вооруженные\n' +
                                                'профессиональной техникой. Таким образом, после путешествия вам будет\n' +
                                                'чем поделиться в соц.сетях и оставить в альбомах.'}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={rightTopCornerInside}/>
                                <Box sx={rightBottomCornerInside}/>
                                <Box sx={rightTopCorner}/>
                                <Box sx={rightBottomCorner}/>
                            </Box>
                            <Box sx={imageContainer}>
                                <Box component={'img'}
                                     src={'/Arkh/ships.jpg'}
                                     alt={'feature'}
                                     style={imageStyles}
                                />
                            </Box>

                        </Box>
                        <Box sx={rightContainer}>
                            <Box sx={textContainer}>
                                <Box sx={leftTopCorner}/>
                                <Box sx={leftBottomCorner}/>
                                <Box sx={leftTopCornerInside}/>
                                <Box sx={leftBottomCornerInside}/>
                                <Box sx={textContentContainer}>
                                    <Typography component='h2' sx={textTitle}>
                                        {'Конструктор'}
                                    </Typography>
                                    <Box>
                                        <Typography component='p' sx={textDescription}>
                                            {'Мы не предлагаем чётко следовать предписаниям, заложенным в\n' +
                                                'сюжет. Мы даём вам возможность дополнить маршруты под ваши интересы,\n' +
                                                'будто это конструктор!'}
                                        </Typography>
                                        <Typography component='p' sx={textDescriptionTitle}>
                                            {'Перед путешествием вы сможете выбрать те локации, в которых хотели\n' +
                                                'бы сделать фото. Чтобы не уходить с «пустыми руками» можно выбрать\n' +
                                                'дополнение – съёмку с моментальной печатью. Дополнением может стать и\n' +
                                                'повторение ваших старых фото, сделанных в Архангельске.'}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={rightTopCornerInside}/>
                                <Box sx={rightBottomCornerInside}/>
                                <Box sx={rightTopCorner}/>
                                <Box sx={rightBottomCorner}/>
                            </Box>
                            <Box sx={imageContainer}>
                                <Box component={'img'}
                                     src={'/Arkh/old_chumb.webp'}
                                     alt={'feature'}
                                     style={imageStyles}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={secondRowContainerStraight}>
                        <Box sx={leftContainer}>

                            <Box sx={imageContainer}>
                                <Box component={'img'}
                                     src={'/Arkh/ships.jpg'}
                                     alt={'feature'}
                                     style={imageStyles}
                                />
                            </Box>
                            <Box sx={textContainer}>
                                <Box sx={leftTopCorner}/>
                                <Box sx={leftBottomCorner}/>
                                <Box sx={leftTopCornerInside}/>
                                <Box sx={leftBottomCornerInside}/>
                                <Box sx={textContentContainer}>
                                    <Typography component='h2' sx={textTitle}>
                                        {'Фотосъёмка'}
                                    </Typography>
                                    <Box>
                                        <Typography component='p' sx={textDescription}>
                                            {'Мы не предлагаем вам несколько минут свободного времени, чтобы\n' +
                                                'успеть сделать несколько кадров во время прогулок. Мы берём фотосъёмку\n' +
                                                'на себя как обязательство!'}
                                        </Typography>
                                        <Typography component='p' sx={textDescriptionTitle}>
                                            {'Путешествия в прошлое останутся не только в памяти, но и на кадрах.\n' +
                                                'Во всех локациях за съёмку отвечают наши персонажи, вооруженные\n' +
                                                'профессиональной техникой. Таким образом, после путешествия вам будет\n' +
                                                'чем поделиться в соц.сетях и оставить в альбомах.'}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={rightTopCornerInside}/>
                                <Box sx={rightBottomCornerInside}/>
                                <Box sx={rightTopCorner}/>
                                <Box sx={rightBottomCorner}/>
                            </Box>
                        </Box>
                        <Box sx={rightContainer}>

                            <Box sx={imageContainer}>
                                <Box component={'img'}
                                     src={'/Arkh/old_chumb.webp'}
                                     alt={'feature'}
                                     style={imageStyles}
                                />
                            </Box>
                            <Box sx={textContainer}>
                                <Box sx={leftTopCorner}/>
                                <Box sx={leftBottomCorner}/>
                                <Box sx={leftTopCornerInside}/>
                                <Box sx={leftBottomCornerInside}/>
                                <Box sx={textContentContainer}>
                                    <Typography component='h2' sx={textTitle}>
                                        {' Конструктор'}
                                    </Typography>
                                    <Box>
                                        <Typography component='p' sx={textDescription}>
                                            {'Мы не предлагаем чётко следовать предписаниям, заложенным в\n' +
                                                'сюжет. Мы даём вам возможность дополнить маршруты под ваши интересы,\n' +
                                                'будто это конструктор!'}
                                        </Typography>
                                        <Typography component='p' sx={textDescriptionTitle}>
                                            {'Перед путешествием вы сможете выбрать те локации, в которых хотели\n' +
                                                'бы сделать фото. Чтобы не уходить с «пустыми руками» можно выбрать\n' +
                                                'дополнение – съёмку с моментальной печатью. Дополнением может стать и\n' +
                                                'повторение ваших старых фото, сделанных в Архангельске.'}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={rightTopCornerInside}/>
                                <Box sx={rightBottomCornerInside}/>
                                <Box sx={rightTopCorner}/>
                                <Box sx={rightBottomCorner}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>)
}

export default MainInfo;

