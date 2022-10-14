import * as C from './styles'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

    const navigate = useNavigate()

    const navigateToStore = () => {
        navigate('/store')
    }

    return (
        <C.Header>
            <C.TitleHeader>Listagem de Produtos</C.TitleHeader>
            <C.LeftSide>
              <C.textNavBar  onClick={navigateToStore}>Loja</C.textNavBar>
              <C.textNavBar>Perfil</C.textNavBar>
            </C.LeftSide>
        </C.Header>
    )
}