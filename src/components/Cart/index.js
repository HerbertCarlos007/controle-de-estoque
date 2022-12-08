
import React, { useState, useEffect } from 'react'
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
        <div>

            <div>
                {cart.map((product, index) =>
                    <div key={index}> 
                        <h1>{product.Product.name}</h1>
                        <h1>{product.Product.brand}</h1>
                        
                    </div>


                )}
            </div>
        </div>
    )
}
