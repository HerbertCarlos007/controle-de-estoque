
import React, { useState, useEffect } from 'react'
import * as C from './styles'
import api from '../../services/api'

import { dinero, toDecimal, toUnits } from 'dinero.js';
import { BRL } from '@dinero.js/currencies';

export const Cart = () => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        productsCart()
    }, [])

    
    function getCurrency(value) {
        return Number(value).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })
      };

    const productsCart = async () => {
        try {
            const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/cartProducts`)
            setCart(response.data)
        } catch (error) {
        }
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1)

        }
    }

    const handleIncrement = () => {
        setQuantity(prevCount => prevCount + 1)
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
                {cart.map((item) =>
                    <C.ContentTableCart>
                        <C.ImageProduct src={item.imageUrl} />
                        <C.ContentTableText>{item.name}</C.ContentTableText>
                        <C.ContentTableText>{getCurrency(item.saleValue)}</C.ContentTableText>
                        <C.ContentTableText>{quantity}</C.ContentTableText>
                        <C.ContentTableText>

                            <C.ContainerActions>
                                <C.ButtonLess onClick={handleDecrement}>-</C.ButtonLess>
                                <C.ButtonAddMore onClick={handleIncrement}>+</C.ButtonAddMore>
                            </C.ContainerActions>
                        </C.ContentTableText>
                        <C.ContentTableText>{getCurrency(item.saleValue * quantity)}</C.ContentTableText>


                    </C.ContentTableCart>
                )}
            </C.Container>
        </>

    )
}
