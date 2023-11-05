import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import api from '../../services/api'

export const Login = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        loadStoreData()
    }, [])

    const loadStoreData = async () => {
        const subdomain = window.location.hostname.split(".")[0] === 'localhost' ? 'dev' : window.location.hostname.split(".")[0]
        const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/store/${subdomain}`)
        localStorage.setItem('store_id', response.data.id)
    }

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

    const handleClickLogin = async () => {
        const store_id = localStorage.getItem('store_id')
        const response = await api.post(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
            email, password, store_id
        })
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('id', response.data.user.id)
        }
        navigate('/home')
    }

    const handleClickRegister = async () => {
        const store_id = localStorage.getItem("store_id")
        const response = await api.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
            email, password, confirmPassword, store_id
        })

        handleClickLogin()
    }

    return (
        <C.Container>
            <C.ContainerLogin>
                {isLoggingIn ? <>
                    <C.Text>Faça seu Login</C.Text>
                    <C.InputLogin type='text' placeholder="Username" onChange={handleLogin} />
                    <C.InputLogin type='password' placeholder="Senha" onChange={handlePassword} />
                    <C.InputLogin
                        type='button'
                        value='Login'
                        fontSize={'22px'}
                        backgroundColor={'#412972'}
                        color={'#fff'}
                        onClick={handleClickLogin}
                    />
                    <C.Text onClick={() => navigate('/newPassword')}>Esqueceu sua senha?</C.Text>
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