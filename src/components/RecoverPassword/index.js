import React, { useState } from "react";
import { useParams } from "react-router";
import * as C from './styles'
import api from "../../services/api";
import { useNavigate } from 'react-router-dom'

export const RecoverPassword = () => {
    
    const navigate = useNavigate()

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { id } = useParams()

    const newPassword = async () => {

        try {
            await api.put(`${process.env.REACT_APP_BACKEND_URL}/forgot-password/${id}`, {
                password, confirmPassword
            })
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <C.Container>
            <C.NewPasswordContainer>
                <C.Title>Digite sua nova senha</C.Title>
                <C.InputNewPassword 
                placeholder="Digite sua nova senha"
                onChange={(e) => setPassword(e.target.value)}
                />
                <C.InputNewPassword 
                placeholder="Confirme sua senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <C.ButtonSaveNewPassword onClick={newPassword}>Salvar senha</C.ButtonSaveNewPassword>
            </C.NewPasswordContainer>
        </C.Container>
    )
}