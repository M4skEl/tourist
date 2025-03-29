import {Box, Typography} from "@mui/material";
import {styles} from "@/components/MainInfo/MainInfo.styles";
import Image from "next/image";



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
                            <Image
                                src={'/Arkh/two_towers.jpg'}
                                alt={'feature'}
                                priority={true}
                                layout={'responsive'}
                                width={450}
                                height={430}
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
                                    {'Впечатления на всю жизнь'}
                                </Typography>
                                <Box>
                                    <Typography component='p' sx={textDescription}>
                                        {'Мы делаем туры в такие места, из которых вы гарантированно привезете миллион историй, чтобы потом рассказать их вашим друзьям, коллегам и будущим внукам'}
                                    </Typography>
                                    <Typography component='p' sx={textDescriptionTitle}>
                                        {'Ну и фоточки для соц. сетей, конечно, будут отвал башки'}
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
                            <Image
                                src={'/Arkh/first_bus.jpg'}
                                alt={'feature'}
                                priority={true}
                                layout={'responsive'}
                                width={450}
                                height={430}
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
                                    {'Впечатления на всю жизнь'}
                                </Typography>
                                <Box>
                                    <Typography component='p' sx={textDescription}>
                                        {'Мы делаем туры в такие места, из которых вы гарантированно привезете миллион историй, чтобы потом рассказать их вашим друзьям, коллегам и будущим внукам'}
                                    </Typography>
                                    <Typography component='p' sx={textDescriptionTitle}>
                                        {'Ну и фоточки для соц. сетей, конечно, будут отвал башки'}
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
                    <Box sx={leftContainer}>
                        <Box sx={textContainer}>
                            <Box sx={leftTopCorner}/>
                            <Box sx={leftBottomCorner}/>
                            <Box sx={leftTopCornerInside}/>
                            <Box sx={leftBottomCornerInside}/>
                            <Box sx={textContentContainer}>
                                <Typography component='h2' sx={textTitle}>
                                    {'Впечатления на всю жизнь'}
                                </Typography>
                                <Box>
                                    <Typography component='p' sx={textDescription}>
                                        {'Мы делаем туры в такие места, из которых вы гарантированно привезете миллион историй, чтобы потом рассказать их вашим друзьям, коллегам и будущим внукам'}
                                    </Typography>
                                    <Typography component='p' sx={textDescriptionTitle}>
                                        {'Ну и фоточки для соц. сетей, конечно, будут отвал башки'}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={rightTopCornerInside}/>
                            <Box sx={rightBottomCornerInside}/>
                            <Box sx={rightTopCorner}/>
                            <Box sx={rightBottomCorner}/>
                        </Box>
                        <Box sx={imageContainer}>
                            <Image
                                src={'/Arkh/ships.jpg'}
                                alt={'feature'}
                                priority={true}
                                layout={'responsive'}
                                width={450}
                                height={430}
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
                                    {'Впечатления на всю жизнь'}
                                </Typography>
                                <Box>
                                    <Typography component='p' sx={textDescription}>
                                        {'Мы делаем туры в такие места, из которых вы гарантированно привезете миллион историй, чтобы потом рассказать их вашим друзьям, коллегам и будущим внукам'}
                                    </Typography>
                                    <Typography component='p' sx={textDescriptionTitle}>
                                        {'Ну и фоточки для соц. сетей, конечно, будут отвал башки'}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={rightTopCornerInside}/>
                            <Box sx={rightBottomCornerInside}/>
                            <Box sx={rightTopCorner}/>
                            <Box sx={rightBottomCorner}/>
                        </Box>
                        <Box sx={imageContainer}>
                            <Image
                                src={'/Arkh/old_chumb.webp'}
                                alt={'feature'}
                                priority={true}
                                layout={'responsive'}
                                width={450}
                                height={430}
                                style={imageStyles}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>)}

export default MainInfo;

