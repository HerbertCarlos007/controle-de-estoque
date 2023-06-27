import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import api from '../../services/api'

export const NewPassword = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')

    const SendEmailRecoverPassword = async (e) => {
        try {
            e.preventDefault()
            await api.post(`${process.env.REACT_APP_BACKEND_URL}/recover-password`, {
                email
            })
        } catch (error) {

        }
    }

    return (
        <C.Container>
            <C.RecoverPasswordContainer>
                <C.Title>Recuperar sua senha</C.Title>
                <C.InputRecoverPassword
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <C.ButtonSendEmail onClick={SendEmailRecoverPassword}>Enviar email</C.ButtonSendEmail>
            </C.RecoverPasswordContainer>
        </C.Container>
    )
}