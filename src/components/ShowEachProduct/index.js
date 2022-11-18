import { useLocation, useParams } from 'react-router'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import * as C from './styles'

export const ShowEachProduct = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [amount, setAmount] = useState('')
    const [brand, setBrand] = useState('')
    const [salePrice, setSalePrice] = useState('')


    useEffect(() => {
        showProduct()
    }, [])

    const { id } = useLocation().state

    const showProduct = async () => {
        try {
            const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)
            const data = response.data
            const productData = data.dataValues
            setName(productData.name)
            setDescription(productData.description)
            setImageUrl(productData.imageUrl)
            setAmount(productData.amount)
            setBrand(productData.brand)
            setSalePrice(String(data.saleValue).replace('.',''))
        } catch (error) {

        }
    }

    return (
        <>
            <C.Header></C.Header>
            <C.Container>
                <C.CardEachProduct>
                    <C.ProductImage src={imageUrl}></C.ProductImage>
                    <C.RightSideContainer>
                        <C.TitleProduct>{name}</C.TitleProduct>
                        <C.TextPrice>R$: {salePrice}</C.TextPrice>
                        <C.ButtonBuy>Comprar</C.ButtonBuy>
                    </C.RightSideContainer>
                </C.CardEachProduct>
            </C.Container>
        </>
    )
}