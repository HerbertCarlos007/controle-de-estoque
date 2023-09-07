import * as C from './styles'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import { Modal } from '../Modal'
import Swal from 'sweetalert2'
import { Header } from '../Header'

export const CreateProducts = ({ getProducts }) => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [purchasePrice, setPurchasePrice] = useState('')
    const [showCreationModal, setShowCreationModal] = useState(false)
    const [file, setFile] = useState('')

    const handleCreationModal = () => {
        setShowCreationModal(true)
    }

    const handleCloseCreationModal = () => {
        setShowCreationModal(false)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleBrand = (e) => {
        setBrand(e.target.value)
    }

    const handlePurchasePrice = (e) => {
        setPurchasePrice(e.target.value)
    }

    const uploadImage = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }


    const registerProducts = async (e) => {
        e.preventDefault();
        const store_id = localStorage.getItem('store_id')

        try {
            const formData = new FormData();
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };

            formData.append('file', file);
            formData.append('productData', JSON.stringify({
                name,
                description,
                amount,
                brand,
                purchasePrice,
                store_id
            }));

            const response = await api.post(`${process.env.REACT_APP_BACKEND_URL}/products`, formData, config);

            if (response.status === 201) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Produto cadastrado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    handleCloseCreationModal();
                    getProducts();
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header />
            <C.Container>
                <C.Title>Lista de Produtos</C.Title>
                <C.ButtonsContainer>
                    <C.ButtonRegisterProducts onClick={handleCreationModal}>Cadastrar Produto</C.ButtonRegisterProducts>
                    <C.ButtonDeleteStock>Deletar Estoque</C.ButtonDeleteStock>
                </C.ButtonsContainer>
                <Modal show={showCreationModal} onClose={handleCloseCreationModal}>
                    <C.ModalContainer>
                        <C.InputName placeholder='Nome' onChange={handleName}></C.InputName>
                        <C.InputDescription placeholder='Descrição' onChange={handleDescription}></C.InputDescription>
                        <C.InputAmount placeholder='Quantidade' onChange={handleAmount}></C.InputAmount>
                        <C.InputBrand placeholder='Marca' onChange={handleBrand}></C.InputBrand>
                        <C.InputPurshacePrice placeholder='Valor de Custo' onChange={handlePurchasePrice}></C.InputPurshacePrice>
                        <label for='file'>
                            <span>Selecione a imagem</span>
                            <span>Procurar</span>
                        </label>
                        <C.InputImageUrl type='file' id='file' name='file' onChange={uploadImage}></C.InputImageUrl>
                        <C.ButtonRegisterModal onClick={registerProducts}>Cadastrar</C.ButtonRegisterModal>
                    </C.ModalContainer>
                </Modal>
            </C.Container>
        </>
    )
}
