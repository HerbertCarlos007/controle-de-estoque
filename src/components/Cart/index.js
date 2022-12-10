
import React, { useState, useEffect } from 'react'
import * as C from './styles'
import api from '../../services/api'

export const Cart = () => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1)

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

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1)

        }
    }

    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1)

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
                {cart.map((item) =>
                    <C.ContentTableCart>
                        <C.ImageProduct src={item.Product.imageUrl} />
                        <C.ContentTableText>{item.Product.name}</C.ContentTableText>
                        <C.ContentTableText>{(item.Product.purchasePrice) + (item.Product.purchasePrice) * 0.4}</C.ContentTableText>
                        <C.ContentTableText>{quantity}</C.ContentTableText>
                        <C.ContentTableText>

                            <C.ContainerActions>
                                <C.ButtonLess onClick={handleDecrement}>-</C.ButtonLess>
                                <C.ButtonAddMore onClick={handleIncrement}>+</C.ButtonAddMore>
                            </C.ContainerActions>
                        </C.ContentTableText>
                        <C.ContentTableText>{item.Product.amount}</C.ContentTableText>


                    </C.ContentTableCart>
                )}
            </C.Container>
        </>

    )
}
