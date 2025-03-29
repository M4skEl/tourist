import {createStyles} from "@/utils/createStyles";

const imageWidthH = 600
//const imageHeightH = 450
const imageWidth = 450
const imageHeight = 450
const imageWidthTablet = 300
//const imageHeightTablet = 300

interface stylesProps {
    images:string[];
    currentIndex: number;
}

export const styles = (
    {images, currentIndex}:stylesProps
) =>
    createStyles({
        mainContainer: {
            overflow: 'hidden',
            position: 'relative',
            height: `${imageHeight}px`,
            maxWidth:`${imageWidth}px`,
            width: `${imageWidth}px`,
            '@media (max-width: 1100px)': {
                width: `${imageWidthTablet}px`,
                maxWidth:`${imageWidthTablet}px`,
            },
            '@media (max-width: 820px)': {
                width: `${imageWidthH}px`,
                maxWidth:`${imageWidthH}px`,
            },
        },
        container: {
            display: 'flex',
            transform: `translateX(-${currentIndex * imageWidth}px)`,
            transition: 'transform 3s ease-in-out',
            width: `${images.length * 100}%`,
            maxWidth: `${images.length * 100}%`,
            padding: 0,
            margin: 0,
            '@media (max-width: 1100px)': {
                transform: `translateX(-${currentIndex * imageWidthTablet}px)`,
            },
            '@media (max-width: 820px)': {
                transform: `translateX(-${currentIndex * imageWidthH}px)`,
            },
            '@media (max-width: 768px)': {
                transform: `none`,
            },
            //height: '100%'
        },
        imageContainer:{
            width: '100%',
            margin: 0,
            padding: 0,
        },
        imageStyles:{
            width: '100%',
            objectFit: 'cover',
            maxWidth:`${imageWidth}px`,
            '@media (max-width:820px)': {
                maxWidth:`${imageWidthH}px`,
                width:`100%`,
            },
        },
    })
