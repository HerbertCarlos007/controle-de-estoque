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

                    {cart && cart.map((item) =>

                        <>
                            <C.ContentTable>
                                <C.ContentTableLeftSection>
                                    <C.ProductImage src={item.imageUrl} />
                                    <span>{item.name}</span>
                                </C.ContentTableLeftSection>

                                <C.ContentTableRightSection>
                                    <C.RowValue>R$ {item.saleValue}</C.RowValue>
                                    <C.ContainerActions>
                                        <span onClick={() => handleDecrement(item.id)}>-</span>
                                        <span>{item.quantity}</span>
                                        <span onClick={() => handleIncrement(item.id)}>+</span>
                                    </C.ContainerActions>
                                    <C.RowValue>{getCurrency(item.saleValue * item.quantity)}</C.RowValue>
                                    <C.RowValue>x</C.RowValue>
                                </C.ContentTableRightSection>
                            </C.ContentTable>
                            <C.Line></C.Line>
                        </>
                    )}
                </C.ContainerCart>

                <C.Teste>

                    <C.ContainerResume>
                        <C.TopSectionResume>
                            <C.TitleContainerResume>Resumo da compra</C.TitleContainerResume>
                        </C.TopSectionResume>
                        <C.LineResume></C.LineResume>
                        <C.CenterSectionResume>
                            <C.LeftSectionResume>
                                <span>Sub-Total</span>
                                <span>Frete</span>
                            </C.LeftSectionResume>

                            <C.RightSectionResume>
                                <span>R$ 400</span>
                                <span>Gratuito</span>
                            </C.RightSectionResume>
                        </C.CenterSectionResume>
                        <C.AddDiscount>Adicionar cupom de desconto</C.AddDiscount>
                        <C.DownSectionResume>
                            <C.LeftSectionResume>Total</C.LeftSectionResume>
                            <C.RightSectionResume>R$ 200</C.RightSectionResume>
                        </C.DownSectionResume>
                    </C.ContainerResume>
                    
                    <C.ContainerCheckout>
                        FINALIZAR COMPRA
                    </C.ContainerCheckout>
                </C.Teste>


            </C.Container>
        </>
    )
}