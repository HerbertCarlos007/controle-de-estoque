import React, { useState, useEffect } from 'react'
import * as C from './styles'
import api from '../../services/api'
import { Load } from '../Load'
import { SideBar } from '../SideBar'
import { HeaderStore } from '../HeaderStore'

export const HomePageStore = () => {

    const [products, setProducts] = useState([])
    const [searchedProductValue, setSearchedProductValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        showAllProducts()

    }, [])

    useEffect(() => {
        searchProduct()
    }, [searchedProductValue])

    const showAllProducts = async () => {
        try {
            const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
            setProducts(response.data.products)
            setIsLoading(true)
        } catch (error) {
        }
    }

    const addToCart = async (productId) => {
        try {

            await api.post(`${process.env.REACT_APP_BACKEND_URL}/cartProducts`, {
                productId,
            })
        } catch (error) {
        }
    }

    const searchProduct = () => {
        const searchedProduct = products.find((availableProduct) => availableProduct.name.toUpperCase() === searchedProductValue.toUpperCase())
        if (!searchedProduct) return
        setProducts([searchedProduct])
    }

    const handleSearchProduct = (e) => {
        const searchValue = e.target.value;
        setSearchedProductValue(searchValue);
    
        if (searchValue === "") {
            showAllProducts()
        }
    }


    return (
        <>
            <SideBar isVisible={isVisible} setIsVisible={setIsVisible} />
            <C.Container onClickCapture={() => setIsVisible(false)}>
                <HeaderStore setIsVisible={setIsVisible} />
                <input type='text' placeholder='buscar produto' onChange={handleSearchProduct} value={searchedProductValue} />
                <C.ContainerProducts>
                    {products && products.map((product, index) =>
                        <C.CardsProducts key={index} >

                            <C.ImageProduct src={product.imageUrl} />
                            <C.ContainerItens>
                                <C.TextTitle>{product.name}</C.TextTitle>
                                <C.TextPrice>R$ {product.saleValue}</C.TextPrice>
                            </C.ContainerItens>
                            <C.ContaineButton>

                                <C.ButtonAddToCart onClick={() => addToCart(product.id)}>Adicionar ao carrinho</C.ButtonAddToCart>
                            </C.ContaineButton>
                        </C.CardsProducts>

                    )}
                </C.ContainerProducts>
                {isLoading ? (
                    (!products || products.length === 0) && <p>Não há projetos cadastrados</p>
                ) : (
                    <Load />
                )}

            </C.Container>
        </>
    )
}