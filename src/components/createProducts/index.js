import * as C from './styles'
import { useState } from 'react'
import api from '../../services/api'
import { Modal } from '../Modal'

export const CreateProducts = () => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [brand, setBrand] = useState('')
    const [purchasePrice, setPurchasePrice] = useState('')
    const [saleValue, setSaleValue] = useState('')
    const [showCreationModal, setShowCreationModal] = useState(false)

    const handleCreationModal = () => {
        setShowCreationModal(true)
    }

    const handleCloseCreationModal = () => {
        setShowCreationModal(false)
    }

    const handleName = (e) => {
        const textName = e.target.value
        setName(textName)
    }

    const handleAmount = (e) => {
        const textAmount = e.target.value
        setAmount(textAmount)
    }

    const handleBrand = (e) => {
        const textBrand = e.target.value
        setBrand(textBrand)
    }

    const handlePurchasePrice = (e) => {
        const textPurchasePrice = e.target.value
        setPurchasePrice(textPurchasePrice)
    }

    const handleSaleValue = (e) => {
        const textSaleValue = e.target.value
        setSaleValue(textSaleValue)
    }

    const registerProducts = async (e) => {
        e.preventDefault()

        try {
            await api.post(`${process.env.REACT_APP_BACKEND_URL}/products`,
                { name, amount, brand, purchasePrice, saleValue }
            )

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <C.Container>
                <C.Title>Lista de Produtos</C.Title>
                <C.ButtonsContainer>
                    <C.ButtonRegisterProducts onClick={handleCreationModal}>Cadastrar Produto</C.ButtonRegisterProducts>
                    <C.ButtonDeleteStock>Deletar Estoque</C.ButtonDeleteStock>
                </C.ButtonsContainer>
                <Modal show={showCreationModal} onClose={handleCloseCreationModal}>
                    <C.InputName placeholder='Nome' onChange={handleName}></C.InputName>
                    <C.InputAmount placeholder='Quantidade' onChange={handleAmount}></C.InputAmount>
                    <C.InputBrand placeholder='Marca' onChange={handleBrand}></C.InputBrand>
                    <C.InputPurshacePrice placeholder='Valor de Custo' onChange={handlePurchasePrice}></C.InputPurshacePrice>
                    <C.InputSaleValue placeholder='Preço de venda' onChange={handleSaleValue}></C.InputSaleValue>
                    <C.ButtonRegisterModal onClick={registerProducts}>Cadastrar</C.ButtonRegisterModal>
                </Modal>

            </C.Container>
        </>

    )
}