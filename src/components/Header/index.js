import * as C from './styles'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {

    const navigate = useNavigate()

    const navigateToStore = () => {
        navigate('/home')
    }

    const navigateToLogin = () => {
        navigate('/')
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
                <h2 onClick={navigateToLogin}>login</h2>
            </C.LeftSide>
        </C.Header>
    )
}