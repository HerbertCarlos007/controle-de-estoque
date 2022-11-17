import React, { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
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
                {allProducts && allProducts.map((product) =>
                    <Link to={`/product/${product.id}`} state={{id: product.id}}>
                        <C.CardsProducts>
                            <C.TopContainerCard><C.ImageProduct src={product.imageUrl} /></C.TopContainerCard>

                            <C.CenterContainerCard><C.textTitle>{product.name}</C.textTitle></C.CenterContainerCard>

                            <C.DownContainerCard><C.TextPrice>R$ {product.saleValue.toFixed(3)}</C.TextPrice></C.DownContainerCard>
                        </C.CardsProducts>
                    </Link>
                )}


            </C.ContainerProducts>
        </C.Container>
    )
}