import localFont from 'next/font/local'

const MontserratFont = localFont({
    src: [
        {
            path: './Montserrat-Regular.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './Montserrat-SemiBold.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './Montserrat-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-montserrat'
})

export default MontserratFont
