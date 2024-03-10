import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom'
import * as C from './styles'

export const SideBar = ({ isVisible, setIsVisible }) => {

    const navigate = useNavigate()

    const levelPermission = localStorage.getItem('level_permission');
    const userPermission = parseInt(levelPermission)

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <>
            {isVisible && (
                <>
                    <C.Container>
                        <Sidebar backgroundColor='#fff'
                            style=
                            {{
                                height: '100%',
                                border: '1px solid #D7D7D7',
                                borderRadius: '20px',
                            }}
                        >
                            <Menu style={{ marginTop: '60px' }}>
                                {userPermission === 1 ? (
                                    <>
                                        <MenuItem onClick={() => navigate('/inventory')}>Estoque</MenuItem>
                                        <MenuItem onClick={() => navigate('/configuration')}> Configurações </MenuItem>
                                    </>
                                ) : null}
                                <MenuItem onClick={() => navigate('/home')}> Loja </MenuItem>
                                <MenuItem onClick={() => navigate('/cart')}> Carrinho </MenuItem>
                                <MenuItem> Minha conta </MenuItem>
                                <MenuItem style={{ marginTop: '150px' }} onClick={logout} > Sair </MenuItem>
                            </Menu>
                        </Sidebar>
                    </C.Container>
                    <C.Overlay onClick={() => setIsVisible(false)} />
                </>
            )}
        </>
    )
}