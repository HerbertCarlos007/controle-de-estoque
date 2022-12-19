import * as C from './styles'
import React, {useState} from 'react';
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
                <NavDropdown
                    title="Perfil"
                    id={`offcanvasNavbarDropdown-expand-${false}`}
                    onClick={handleCreationModal}
                >
                    <NavDropdown.Item href="#action3">Configurações</NavDropdown.Item>
                </NavDropdown>
            </C.LeftSide>
            <Modal show={showCreationModal} onClose={handleCloseCreationModal}>
                <div>aaa</div>
            </Modal>
        </C.Header>
    )
}