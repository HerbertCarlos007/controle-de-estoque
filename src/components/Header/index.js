import * as C from './styles'
import { useNavigate } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {

    const navigate = useNavigate()

    const navigateToStore = () => {
        navigate('/')
    }

    return (
        <C.Header>
            <C.TitleHeader>Listagem de Produtos</C.TitleHeader>
            <C.LeftSide>
                <C.textNavBar onClick={navigateToStore}>Loja</C.textNavBar>
                <NavDropdown
                    title="Perfil"
                    id={`offcanvasNavbarDropdown-expand-${false}`}
                >
                    <NavDropdown.Item href="#action3">Configurações</NavDropdown.Item>
                </NavDropdown>
            </C.LeftSide>
        </C.Header>
    )
}