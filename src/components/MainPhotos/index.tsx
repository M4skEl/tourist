import {Box, Typography} from "@mui/material";
import {styles} from "@/components/MainPhotos/MainPhotos.styles";

const MainPhotos = () => {

    const {
        sectionContainer,
        firstRowContainer,
        secondRowContainer,
        thirdRowContainer,
        leftFirst,
        verticalFirst,
        verticalSecond,
        horizontalFirst,
        horizontalText,

        leftTopCorner,
        leftBottomCorner,
        rightTopCorner,
        rightBottomCorner,

        leftTopCornerInside,
        leftBottomCornerInside,
        rightTopCornerInside,
        rightBottomCornerInside,

        rightFirst,
        horizontalFirstImg,

        leftSecond,
        horizontalSecond,
        rightSecond,
        imageStyles,
    } = styles()


    return (
        <Box component={'section'} sx={sectionContainer} id={'photos'}>

            <Box sx={firstRowContainer}>
                <Box sx={leftFirst}>
                    <Box sx={verticalFirst}>
                        <Box component={'img'}
                            src={'/Arkh/980654.jpg'}
                            alt={'feature'}
                            style={imageStyles}
                        />
                    </Box>
                    <Box sx={horizontalFirst}>
                        <Box sx={horizontalFirstImg}>
                            <Box component={'img'}
                                src={'/Arkh/tramHor.jpg'}
                                alt={'feature'}
                                style={imageStyles}
                            />
                        </Box>
                        <Box sx={horizontalText}>
                            <Box sx={leftTopCorner}/>
                            <Box sx={leftBottomCorner}/>
                            <Box sx={leftTopCornerInside}/>
                            <Box sx={leftBottomCornerInside}/>
                            <Typography>
                            {'Окунитесь в атмосферу старинного города'}
                            </Typography>
                            <Box sx={rightTopCornerInside}/>
                            <Box sx={rightBottomCornerInside}/>
                            <Box sx={rightTopCorner}/>
                            <Box sx={rightBottomCorner}/>
                        </Box>
                    </Box>
                </Box>
                <Box sx={rightFirst}>
                    <Box component={'img'}
                        src={'/Arkh/oldArkh1.jpg'}
                        alt={'feature'}
                        style={{ maxWidth: '100%',
                        width: '100%',}}
                    />
                </Box>
            </Box>
            <Box sx={secondRowContainer}>
                <Box sx={leftSecond}>
                    <Box sx={horizontalSecond}>
                        <Box sx={horizontalFirstImg}>
                            <Box component={'img'}
                                src={'/Arkh/oldcity.jpg'}
                                alt={'feature'}
                                style={imageStyles}
                            />
                        </Box>
                        <Box sx={horizontalText}>
                            <Box sx={leftTopCorner}/>
                            <Box sx={leftBottomCorner}/>
                            <Box sx={leftTopCornerInside}/>
                            <Box sx={leftBottomCornerInside}/>
                            <Typography>
                                {'Узнай историю своей малой Родины'}
                            </Typography>
                            <Box sx={rightTopCornerInside}/>
                            <Box sx={rightBottomCornerInside}/>
                            <Box sx={rightTopCorner}/>
                            <Box sx={rightBottomCorner}/>
                        </Box>
                    </Box>
                    <Box sx={verticalSecond}>
                        <Box component={'img'}
                            src={'/Arkh/grin_a.jpg'}
                            alt={'feature'}
                            style={imageStyles}
                        />
                    </Box>

                </Box>
                <Box sx={rightSecond}>
                    <Box sx={verticalSecond}>
                        <Box component={'img'}
                            src={'/Arkh/old_house.jpg'}
                            alt={'feature'}
                            style={imageStyles}
                        />
                    </Box>
                    <Box sx={horizontalSecond}>
                        <Box sx={horizontalText}>
                            <Box sx={leftTopCorner}/>
                            <Box sx={leftBottomCorner}/>
                            <Box sx={leftTopCornerInside}/>
                            <Box sx={leftBottomCornerInside}/>
                            <Typography>
                                {'Сделай фотографии в старинном стиле'}
                            </Typography>
                            <Box sx={rightTopCornerInside}/>
                            <Box sx={rightBottomCornerInside}/>
                            <Box sx={rightTopCorner}/>
                            <Box sx={rightBottomCorner}/>
                        </Box>
                        <Box sx={horizontalFirstImg}>
                            <Box component={'img'}
                                src={'/Arkh/first_tram.webp'}
                                alt={'feature'}
                                style={imageStyles}
                            />
                        </Box>

                    </Box>

                </Box>


            </Box>
            <Box sx={thirdRowContainer}></Box>
        </Box>
    )
}

export default MainPhotos