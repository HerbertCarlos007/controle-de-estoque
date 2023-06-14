import React, { useState, useEffect } from 'react'
import * as C from './styles'
import api from '../../services/api'
import { Load } from '../Load'
export const Cart = () => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [productIncremented, setProductIncremented] = useState([])
    const [isLoading, setIsLoading] = useState(false)
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
            setIsLoading(true)
        } catch (error) {
        }
    }
    const handleDecrement = (productId) => {
        const cartProductsDecremented = cart.map(productsCart => {
            if (productsCart.id === productId && productsCart.quantity > 1) {
                productsCart.quantity = productsCart.quantity - 1
            }
            return productsCart
        })
        setProductIncremented(cartProductsDecremented)
    }
    const handleIncrement = (productId) => {
        const cartProductsIncremented = cart.map(productCart => {

            if (productCart.id === productId) {
                productCart.quantity = productCart.quantity + 1
            }
            return productCart
        })
        setProductIncremented(cartProductsIncremented)
    }

    const handleQuantityChange = async (productId, userId, quantity) => {
        try {
            await api.patch(`${process.env.REACT_APP_BACKEND_URL}/cartProducts/increment/${userId}/${productId}`, { quantity })
            await productsCart()
        } catch (error) {
        }
    }
    return (
        <>
            <C.Header />
            <C.Container>
                <C.ContainerCart>
                    <C.HeaderTable>
                        <C.HeaderLeftSection>
                            <C.ColumnValue>Produto</C.ColumnValue>
                        </C.HeaderLeftSection>
                        <C.HeaderRightSection>
                            <C.ColumnValue>Preço</C.ColumnValue>
                            <C.ColumnValue>Quantidade</C.ColumnValue>
                            <C.ColumnValue>Total</C.ColumnValue>
                            <C.ColumnValue>-</C.ColumnValue>
                        </C.HeaderRightSection>
                    </C.HeaderTable>
                    <C.Line></C.Line>
                    
                    <C.ContentTable>
                        <C.ContentTableLeftSection>aaa</C.ContentTableLeftSection>
                        
                        <C.ContentTableRightSection>
                            <C.RowValue>R$ 120</C.RowValue>
                            <C.ContainerActions>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </C.ContainerActions>
                            <C.RowValue>240</C.RowValue>
                            <C.RowValue>x</C.RowValue>
                        </C.ContentTableRightSection>
                    </C.ContentTable>
                </C.ContainerCart>


                <C.ContainerResume>
                    aa
                </C.ContainerResume>
            </C.Container>
        </>
    )
}