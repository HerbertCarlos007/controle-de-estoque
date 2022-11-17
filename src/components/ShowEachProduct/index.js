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
    const [purchasePrice, setPurchasePrice] = useState('')


    useEffect(() => {
        showProduct()
    }, [])

    const { id } = useLocation().state

    const showProduct = async () => {
        try {
            const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)
            const data = response.data
            setName(data.name)
            setDescription(data.description)
            setImageUrl(data.imageUrl)
            setAmount(data.amount)
            setBrand(data.brand)
            setPurchasePrice(data.purchasePrice)

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
                        <C.TextPrice>R$: {purchasePrice}</C.TextPrice>
                        <C.ButtonBuy>Comprar</C.ButtonBuy>
                    </C.RightSideContainer>
                </C.CardEachProduct>
            </C.Container>
        </>
    )
}