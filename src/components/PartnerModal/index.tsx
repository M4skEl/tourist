'use client'
import React, {useEffect, useState} from 'react'
import {Typography, Box, List, ListItem, Button} from '@mui/material'
import {styles} from "@/components/PartnerModal/PartnerModal.styles";
import useOutsideClick from "@/utils/useOutsideClick";


interface ModalProps {
    onClose: () => void;
}

export const PartnerModal = ({onClose}: ModalProps) => {

    const {
        mainContainer,
        modalContainer,
        crossContainer,
        cross,
        modalTitle,
        formContainer,
        inputContainer,
        label,
        input,
        textareaContainer,
        textareaField,

        buttonContainer,
        button,
        leftTopCornerButton,
        leftBottomCornerButton,
        rightTopCornerButton,
        rightBottomCornerButton,

    } = styles()
    const ref = useOutsideClick(onClose);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company:'',
        comment: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Обработка отправки формы
        console.log(formData);
    };


    return (
        <Box sx={mainContainer}>
            <Box sx={modalContainer} ref={ref}>
                <Box sx={crossContainer} onClick={()=>{onClose()}}>
                    <Box component={'img'} sx={cross} src={'/icons/CrossIcon.svg'}/>
                </Box>

                <Typography sx={modalTitle}>
                    {'ОСТАВЬ ЗАЯВКУ'}<br/>{'НА ПАРТНЕРСКОЕ СОТРУДНИЧЕСТВО'}
                </Typography>
                <Box>

                    <Box sx={formContainer}>
                        <form onSubmit={handleSubmit}>
                            <Box sx={inputContainer}>
                                <Box component={'label'} sx={label}>{'Имя'}</Box>
                                    <Box component={'input'} sx={input}
                                         type="text"
                                         required
                                         className="w-full px-4 py-2 border rounded-[15px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                            </Box>

                            <Box sx={inputContainer}>
                                <Box component={'label'} sx={label}>{'Почта'}</Box>
                                <Box component={'input'} sx={input}
                                    type="email"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </Box>

                            <Box sx={inputContainer}>
                                <Box component={'label'} sx={label}>{'Организация'}</Box>
                                <Box component={'input'} sx={input}
                                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                                     onChange={(e) => setFormData({...formData, company: e.target.value})}
                                />
                            </Box>
                            <Box sx={inputContainer}>
                                <Box component={'label'} sx={label}>{'Телефон для связи'}</Box>
                                <Box component={'input'} sx={input}
                                    placeholder="+7 (999) 999-99-99"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                />
                            </Box>

                            <Box sx={textareaContainer}>
                                <Box component={'label'} sx={label}>Комментарий</Box>
                                <Box component={'textarea'} sx={textareaField}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 h-24"
                                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                                />
                            </Box>

                            <Box sx={buttonContainer}>
                                <Button sx={button} type="submit">
                                    <Box sx={leftTopCornerButton}/>
                                    <Box sx={leftBottomCornerButton}/>
                                    {'Отправить'}
                                    <Box sx={rightTopCornerButton}/>
                                    <Box sx={rightBottomCornerButton}/>
                                </Button>
                            </Box>

                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>


    )


}