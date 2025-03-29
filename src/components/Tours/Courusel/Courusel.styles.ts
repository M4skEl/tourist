import {createStyles} from "@/utils/createStyles";

const imageWidth = 450
const imageHeight = 450

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
        },
        container: {
            display: 'flex',
            transform: `translateX(-${currentIndex * imageWidth}px)`,
            transition: 'transform 3s ease-in-out',
            width: `${images.length * 100}%`,
            maxWidth: `${images.length * 100}%`,
            padding: 0,
            margin: 0,
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
        },
    })
