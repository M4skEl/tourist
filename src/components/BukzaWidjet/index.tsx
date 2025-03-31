// components/BukzaWidget.js
'use client';


import {useEffect} from "react";
import {Box, Typography} from "@mui/material";
import {styles} from "@/components/BukzaWidjet/BukzaWidjet.style";
import './bukza.css'

export default function BukzaWidget() {

    const {
        sectionContainer,
        title,
        titleContainer,
        background,
    } = styles()


    useEffect(() => {
        if (window) {
            const script = document.createElement("script");
            script.src = "https://public.bukza.com/api/script/generate/31410/32612/BukzaContainer32612"
            script.async = true;
            document.body.appendChild(script)
        }
    }, [])


    return (
        <Box component={"section"} sx={sectionContainer} id={'booking'}>
            <Box sx={titleContainer}>
                <Typography component="span" sx={title}>{'Онлайн запись'}</Typography>
            </Box>
            <Box sx={background}/>
            <Box sx={{margin:'0 40px', background:'transparent'}}>
            <div id="BukzaContainer32612"></div>
            </Box>
        </Box>
    )


}
