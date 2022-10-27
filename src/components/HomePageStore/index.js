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
        <C.Container>
            <C.Header>
                <C.HeaderSideLeft>aaa</C.HeaderSideLeft>

                <C.HeaderSideRight>dd</C.HeaderSideRight>
            </C.Header>


            <C.ContainerProducts>
                {allProducts.map((product) => 
                      <C.CardsProducts>
                      <C.TopContainerCard><C.ImageProduct src={product.imageUrl}/></C.TopContainerCard>
  
                      <C.CenterContainerCard><C.textTitle>{product.name}</C.textTitle></C.CenterContainerCard>
  
                      <C.DownContainerCard><C.TextPrice>R$ {product.saleValue.toFixed(2)}</C.TextPrice></C.DownContainerCard>
                  </C.CardsProducts>
                )}
              

            </C.ContainerProducts>
        </C.Container>
    )
}