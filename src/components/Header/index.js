import React, {Children, useState} from 'react';
import * as C from './styles'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SideBar } from '../SideBar';
import { AiOutlineMenu } from 'react-icons/ai'

export const Header = ({children}) => {
    
    const [isVisible, setIsVisible] = useState(false)

    const navigate = useNavigate()

    const navigateToStore = () => {
        navigate('/home')
    }

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <>
            <SideBar isVisible={isVisible} setIsVisible={setIsVisible} />
            <C.Header>
                <C.Menu onClick={() => setIsVisible(true)}>
                    <AiOutlineMenu size={24} />
                </C.Menu>
                <C.TitleHeader>{children}</C.TitleHeader>
                <C.RightSide>
                    <C.textNavBar onClick={navigateToStore}>Loja</C.textNavBar>
                    <NavDropdown
                        title="Perfil"
                        id={`offcanvasNavbarDropdown-expand-${false}`}
                        className='dropdown'
                    >
                        <NavDropdown.Item href="#action3">Minha conta</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Configurações</NavDropdown.Item>
                        <NavDropdown.Item onClick={logout}>Sair</NavDropdown.Item>
                    </NavDropdown>

                </C.RightSide>
            </C.Header>
        </>
    )
}