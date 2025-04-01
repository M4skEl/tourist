import {Box} from '@mui/material'
import {styles} from "@/components/Burger/Burger.styles"

interface BurgerProps {
    onOpen: () => void;
}

export const Burger = ({onOpen}:BurgerProps) => {

    const {
        container,
        row,
    } = styles()

    return (
        <Box sx={container} onClick={()=>onOpen()}>
            <Box sx={row}/>
            <Box sx={row}/>
            <Box sx={row}/>
        </Box>
    )

}
