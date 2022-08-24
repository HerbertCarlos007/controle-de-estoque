import * as C from './styles'
import { useState } from 'react'
import api from '../../services/api'
import { Modal } from '../Modal'

export const CreateProducts = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
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

    return (
        <>
            <C.Container>
                <C.Title>Lista de Produtos</C.Title>
                <C.ButtonsContainer>
                    <C.ButtonRegisterProducts onClick={handleCreationModal}>Cadastrar Produto</C.ButtonRegisterProducts>
                    <C.ButtonDeleteStock>Deletar Estoque</C.ButtonDeleteStock>
                </C.ButtonsContainer>
                <Modal  show={showCreationModal} onClose={handleCloseCreationModal}><h1>Hello World</h1></Modal>
            </C.Container>
        </>

    )
}