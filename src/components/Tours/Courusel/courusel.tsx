import React, {useState, useEffect} from 'react';
import {Box} from "@mui/material";
import {styles} from './Courusel.styles'

interface ImageSliderProps {
    images: string[];
    slideInterval?: number;
}

const ImageSlider = ({
                         images,
                         slideInterval = 15000
                     }: ImageSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const {
        mainContainer,
        //container,
        imageContainer,
        imageStyles
    } = styles({images, currentIndex});


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, slideInterval);

        return () => clearInterval(interval);
    }, [images.length, slideInterval]);

    return (
        <Box sx={mainContainer}>
            <Box sx={styles({images, currentIndex}).container}>

                {images.map((image, index) => (
                    <Box
                        key={index}
                        sx={imageContainer}
                    >
                        <Box component={'img'}
                            src={image}
                            alt={'feature'}
                            sx={imageStyles}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ImageSlider;
