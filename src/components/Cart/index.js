
import React, { useState, useEffect } from 'react'
import * as C from './styles'
import api from '../../services/api'

export const Cart = () => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        productsCart()
    }, [])

    const productsCart = async () => {
        try {
            const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/cartProducts`)
            setCart(response.data)
        } catch (error) {
        }
    }

    return (
        <>
            <C.Header />
            <C.Container>
                <C.HeaderTableCart>
                    <C.HeaderTableText>Imagem</C.HeaderTableText>
                    <C.HeaderTableText>Produto</C.HeaderTableText>
                    <C.HeaderTableText>Preço</C.HeaderTableText>
                    <C.HeaderTableText>Quantidade</C.HeaderTableText>
                    <C.HeaderTableText>Ações</C.HeaderTableText>
                    <C.HeaderTableText>Preço Total</C.HeaderTableText>
                </C.HeaderTableCart>
                <C.Line></C.Line>
                <C.ContentTableCart>
                    <C.ContentTableText>Imagem</C.ContentTableText>
                    <C.ContentTableText>Imagem</C.ContentTableText>
                    <C.ContentTableText>Imagem</C.ContentTableText>
                    <C.ContentTableText>Imagem</C.ContentTableText>
                    <C.ContentTableText>Imagem</C.ContentTableText>
                    <C.ContentTableText>Imagem</C.ContentTableText>
                </C.ContentTableCart>
            </C.Container>
        </>

    )
}
