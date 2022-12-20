import * as C from './styles'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Modal } from '../Modal'

export const Header = () => {

    const [showCreationModal, setShowCreationModal] = useState(false)

    const navigate = useNavigate()

    const navigateToStore = () => {
        navigate('/')
    }

    const handleCreationModal = () => {
        setShowCreationModal(true)
    }

    const handleCloseCreationModal = () => {
        setShowCreationModal(false)
    }

    return (
        <C.Header>
            <C.TitleHeader>Listagem de Produtos</C.TitleHeader>
            <C.LeftSide>
                <C.textNavBar onClick={navigateToStore}>Loja</C.textNavBar>
                {/* <NavDropdown
                    title="Perfil"
                    id={`offcanvasNavbarDropdown-expand-${false}`}
                    onClick={handleCreationModal}
                >
                    <NavDropdown.Item href="#action3">Configurações</NavDropdown.Item>
                </NavDropdown> */}

                <h2 onClick={handleCreationModal}>login</h2>
            </C.LeftSide>
            <Modal show={showCreationModal} onClose={handleCloseCreationModal} height={"300px"} width={'400px'} >
                <C.ModalContainer>
                    <C.Text>Faça seu Login</C.Text>
                    <C.Input placeholder='E-mail' type='text'></C.Input>
                    <C.Input placeholder='Senha' type='password'></C.Input>
                    <C.Text fontSize={'15px'} fontWeight={'0'}>Não tem conta? <b><C.LinkToRegister>Registre-se</C.LinkToRegister></b></C.Text>
                </C.ModalContainer>
            </Modal>
        </C.Header>
    )
}