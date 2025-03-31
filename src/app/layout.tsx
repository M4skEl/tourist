import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import MontserratFont from '@/utils/Font/fonts'

export const metadata: Metadata = {
    title: "Ретроспектива",
    description: "Фотоэкскурсии по городу на ретроавтомобиле",
    icons: {
        icon: [
            {url: '/favicon.png'}
        ]
    },
    keywords: [
        "ретроавтомобили",
        "экскурсия",
        "куда сходить в Архангельске",
        "достопримечательности Архангельска",
        "семейный отдых",
        "экскурсии в Архангельске 2025",
        "Семейный отдых в Архангельске",
        "ретро-автомобили",
        "рестроспектива"
    ]
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={MontserratFont.variable}
        >
        {children}
        </body>
        </html>
    );
}
