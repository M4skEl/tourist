import {CSSProperties} from 'react'
import {SxProps, Theme} from '@mui/material'

export type TStyleObject = Record<string, SxProps<Theme> | CSSProperties>

export const createStyles = <T extends TStyleObject = TStyleObject>(style: T): T => style
