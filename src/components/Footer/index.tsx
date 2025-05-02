'use client'
import React from 'react'
import {Typography, Box} from '@mui/material'
import {styles} from "@/components/Footer/Footer.styles";

const Footer = () => {


  const {
    sectionContainer,
    contentContainer,
    //socialsContainer,
    socialLink,
    socialLinkImg,
    contactsContainer,
    contactsRow,


    descriptionContainer,
    title,
    description,

    linksContainer,
    governmentDescription,
    contacts,
    logotype,
    governmentContainer,
  } = styles()


  return (
    <Box component={'section'} sx={sectionContainer} id={'contacts'}>

      <Box sx={contentContainer}>
        <Box component={'a'} sx={socialLink} href={'https://vk.com/retrospektiva_arh/'} target={'_blank'}
             rel='noopener noreferrer nofollow'>
          <Box component={'img'} sx={socialLinkImg} src={'/icons/VK.png'}/>
        </Box>

        {/*<Box sx={socialsContainer}>
                    <Box component={'a'} sx={socialLink} href={'https://vk.com/'} rel='noopener noreferrer'>
                        <Box component={'img'} style={socialLinkImg} src={'/icons/VK.png'}/>
                    </Box>
                    <Box component={'a'} sx={socialLink} href={'https://web.telegram.org/'} rel='noopener noreferrer'>
                        <Box component={'img'} style={socialLinkImg} src={'/icons/Telegram.png'}/>
                    </Box>
                </Box>*/}

        <Box sx={descriptionContainer}>
          <Typography sx={title}>{'РЕТРОСПЕКТИВА'}</Typography>
          <Typography sx={description}>
            {'ФОТОЭКСКУРСИИ ПО ГОРОДУ'}<br/>
            {'НА РЕТРОАВТОМОБИЛЕ'}
          </Typography>
          <Box sx={linksContainer}>
            {/* <Box sx={firstRow}>
                            <Link href="/" style={link}>
                                <Typography component={'span'} sx={linkText}>
                                    {'Почему'}
                                </Typography>
                            </Link>
                            <Link href="/" style={link}>
                                <Typography component={'span'} sx={linkText}>
                                    {'Кто мы'}
                                </Typography>
                            </Link>
                            <Link href="/" style={link}>
                                <Typography component={'span'} sx={linkText}>
                                    {'Отзывы'}
                                </Typography>
                            </Link>
                        </Box>
                        <Box sx={secondRow}>
                            <Link href="/" style={link}>
                                <Typography component={'span'} sx={linkText}>
                                    {'Контакты'}
                                </Typography>
                            </Link>
                            <Link href="/" style={link}>
                                <Typography component={'span'} sx={linkText}>
                                    {'Забронировать'}
                                </Typography>
                            </Link>
                        </Box>*/}
            <Box sx={governmentContainer}>
              <Box component={'img'} sx={logotype} src={'/icons/LogoFond.png'}/>
              <Typography sx={governmentDescription}>
                {'Проект создан при поддержке Федерального государственного бюджетного учреждения "Фонд содействия развитию малых форм предприятий в научно-технической сфере в рамках программы "Студенческий стартап" федерального проекта "Платформа университетского технологического предпринимательства"'}<br/>
              </Typography>
            </Box>
            <Box sx={contactsContainer}>
              <Box sx={contactsRow}>
                <Typography component='span' sx={contacts}>
                  {'ООО "Ретроспектива"'}</Typography>
                <Typography component='span' sx={contacts}>
                  {'ИНН 2901317840'} </Typography>
                <Typography component='span' sx={contacts}>
                  {'г. Архангельск'} </Typography>
              </Box>
              <Box sx={contactsRow}>
                <Typography component='span' sx={contacts}>
                  {'Тел.: +7 (921) 293-19-52'}</Typography>
                <Typography component='span' sx={contacts}>
                  {'E-mail: ArhRetrospektr@yandex.ru'}
                </Typography>
              </Box>
            </Box>
          </Box>


        </Box>
        <Box component={'a'} sx={socialLink} href={'https://t.me/retrospektiva_arh_bot'} rel='noopener noreferrer'>
          <Box component={'img'} sx={socialLinkImg} src={'/icons/Telegram.png'}/>
        </Box>
      </Box>

    </Box>
  )
}

export default Footer
