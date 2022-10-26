import React, { useState, useEffect } from 'react'
import * as C from './styles'

import api from '../../services/api'

export const HomePageStore = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        showAllProducts()
    }, [])

    const showAllProducts = async () => {
        try {
            const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
            setAllProducts((response.data.products))

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <C.Header>
                <C.HeaderSideLeft>aaa</C.HeaderSideLeft>

                <C.HeaderSideRight>dd</C.HeaderSideRight>
            </C.Header>


            <C.Container>
                {allProducts.map((product) => 
                      <C.CardsProducts>
                      <C.TopContainerCard>{product.name}</C.TopContainerCard>
  
                      <C.CenterContainerCard>dasd</C.CenterContainerCard>
  
                      <C.DownContainerCard>{product.saleValue.toFixed(2)}</C.DownContainerCard>
                  </C.CardsProducts>
                )}
              

            </C.Container>
        </>
    )
}