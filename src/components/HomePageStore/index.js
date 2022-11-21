import React, { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom'


import * as C from './styles'
import api from '../../services/api'

export const HomePageStore = () => {

    const [allProducts, setAllProducts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        showAllProducts()
    }, [])

    const navigateToInventory = () => {
        navigate('/inventory')
    }

    const showAllProducts = async () => {
        try {
            const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
            setAllProducts((response.data.products))

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <C.Container>
            <Navbar key={false} bg="light" expand={false} >
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                    <Navbar.Brand href="#">Bryan Store</Navbar.Brand>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${false}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                                Herbert Store
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Minha Loja</Nav.Link>
                                <Nav.Link href="#action2" onClick={navigateToInventory}>Estoque</Nav.Link>
                                <NavDropdown
                                    title="Perfil"
                                    id={`offcanvasNavbarDropdown-expand-${false}`}
                                >
                                    <NavDropdown.Item href="#action3">Configurações</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <C.ContainerProducts>
                {allProducts && allProducts.map((product) =>
                    <Link style={{textDecoration: 'none', color: 'black'}} to={`/product/${product.id}`} state={{ id: product.id }}>
                        <C.CardsProducts>
                            <C.TopContainerCard><C.ImageProduct src={product.imageUrl} /></C.TopContainerCard>

                            <C.CenterContainerCard><C.textTitle>{product.name}</C.textTitle></C.CenterContainerCard>

                            <C.DownContainerCard><C.TextPrice>R$ {product.saleValue}</C.TextPrice></C.DownContainerCard>
                        </C.CardsProducts>
                    </Link>
                )}


            </C.ContainerProducts>
        </C.Container>
    )
}