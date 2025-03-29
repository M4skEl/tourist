import {Box, Typography} from "@mui/material";
import {styles} from "@/components/MainPhotos/MainPhotos.styles";
import Image from "next/image";

const MainPhotos = () => {

    const {
        sectionContainer,
        firstRowContainer,
        secondRowContainer,
        thirdRowContainer,
        leftFirst,
        verticalFirst,
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
                        <Image
                            src={'/Arkh/980654.jpg'}
                            alt={'feature'}
                            priority={true}
                            layout={'responsive'}
                            width={450}
                            height={430}
                            style={imageStyles}
                        />
                    </Box>
                    <Box sx={horizontalFirst}>
                        <Box sx={horizontalFirstImg}>
                            <Image
                                src={'/Arkh/tramHor.jpg'}
                                alt={'feature'}
                                priority={true}
                                layout={'responsive'}
                                width={450}
                                height={210}
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
                    <Image
                        src={'/Arkh/oldArkh1.jpg'}
                        alt={'feature'}
                        priority={true}
                        layout={'responsive'}
                        width={600}
                        height={430}
                        style={{ maxWidth: '100%',}}
                    />
                </Box>
            </Box>
            <Box sx={secondRowContainer}>
                <Box sx={leftSecond}>
                    <Box sx={horizontalSecond}>
                        <Box sx={horizontalFirstImg}>
                            <Image
                                src={'/Arkh/oldcity.jpg'}
                                alt={'feature'}
                                priority={true}
                                layout={'responsive'}
                                width={430}
                                height={210}
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
                    <Box sx={verticalFirst}>
                        <Image
                            src={'/Arkh/grin_a.jpg'}
                            alt={'feature'}
                            priority={true}
                            layout={'responsive'}
                            width={450}
                            height={430}
                            style={imageStyles}
                        />
                    </Box>

                </Box>
                <Box sx={rightSecond}>
                    <Box sx={verticalFirst}>
                        <Image
                            src={'/Arkh/old_house.jpg'}
                            alt={'feature'}
                            priority={true}
                            layout={'responsive'}
                            width={450}
                            height={430}
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
                            <Image
                                src={'/Arkh/first_tram.webp'}
                                alt={'feature'}
                                priority={true}
                                layout={'responsive'}
                                width={430}
                                height={210}
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