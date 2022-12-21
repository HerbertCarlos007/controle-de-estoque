import React, { useState } from "react";
import * as C from './styles'
import api from '../../services/api'

import { Modal } from '../Modal'

export const Login = () => {

    const [isLoggingIn, setIsLoggingIn] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const switchLogin = () => {
        setIsLoggingIn(!isLoggingIn)
    }

    const handleLogin = (e) => {
        const textEmail = e.target.value
        setEmail(textEmail)
    }

    const handlePassword = (e) => {
        const textPassword = e.target.value
        setPassword(textPassword)
    }

    const handleConfirmPassword = (e) => {
        const textConfirmPassword = e.target.value
        setConfirmPassword(textConfirmPassword)
    }

    const handleClickRegister = async () => {
        const response = await api.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
            email, password, confirmPassword
        })
    }

    return (
        <C.Container>
            <C.ContainerLogin>
                {isLoggingIn ? <>
                    <C.Text>Faça seu Login</C.Text>
                    <C.InputLogin type='text' placeholder="Username" />
                    <C.InputLogin type='password' placeholder="Senha" />
                    <C.InputLogin
                        type='button'
                        value='Login'
                        fontSize={'22px'}
                        backgroundColor={'#412972'}
                        color={'#fff'}
                    />
                    <C.Text>Não tem cadastro? <C.LinkToRegister onClick={switchLogin}>Registre-se</C.LinkToRegister></C.Text>
                </> :
                    <>
                        <C.Text>Registre-se</C.Text>
                        <C.InputRegister
                            type='text'
                            placeholder="Digite seu email"
                            onChange={handleLogin}
                        />
                        <C.InputRegister
                            type='password'
                            placeholder="Digite sua senha"
                            onChange={handlePassword}
                        />

                        <C.InputRegister
                            onChange={handleConfirmPassword}
                            type='password'
                            placeholder="Confirme sua senha"
                        />

                        <C.InputRegister
                            type='button'
                            value='Cadastrar'
                            fontSize={'22px'}
                            backgroundColor={'#412972'}
                            color={'#fff'}
                            onClick={handleClickRegister}
                        />

                        <C.LinkToRetunToLogin onClick={switchLogin}>Voltar</C.LinkToRetunToLogin>
                    </>
                }
            </C.ContainerLogin>
        </C.Container>
    )
}