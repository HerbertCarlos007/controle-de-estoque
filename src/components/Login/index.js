import React, { useState } from "react";
import * as C from './styles'

import { Modal } from '../Modal'

export const Login = () => {

    const [isLoggingIn, setIsLoggingIn] = useState(true)

    const switchLogin = () => {
        setIsLoggingIn(!isLoggingIn)
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
                        />
                        <C.InputRegister
                            type='password'
                            placeholder="Digite sua senha"
                        />

                        <C.InputRegister
                            type='password'
                            placeholder="Confirme sua senha"
                        />

                        <C.InputRegister
                            type='button'
                            value='Cadastrar'
                            fontSize={'22px'}
                            backgroundColor={'#412972'}
                            color={'#fff'}
                        />

                        <C.LinkToRetunToLogin onClick={switchLogin}>Voltar</C.LinkToRetunToLogin>
                    </>
                }
            </C.ContainerLogin>
        </C.Container>
    )
}