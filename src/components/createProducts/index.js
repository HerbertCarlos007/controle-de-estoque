import * as C from './styles'
import { useState } from 'react'
import api from '../../services/api'
import { Modal } from '../Modal'
import Swal from 'sweetalert2'
import { Header } from '../Header'

export const CreateProducts = () => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [brand, setBrand] = useState('')
    const [purchasePrice, setPurchasePrice] = useState('')
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



    const registerProducts = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post(`${process.env.REACT_APP_BACKEND_URL}/products`,
                { name, amount, brand, purchasePrice }
            )

            if (response.status === 201) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Produto cadastrado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(
                    handleCloseCreationModal()
                )
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <Header/>
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
                    <C.ButtonRegisterModal onClick={registerProducts}>Cadastrar</C.ButtonRegisterModal>
                </Modal>

            </C.Container>
        </>

    )
}