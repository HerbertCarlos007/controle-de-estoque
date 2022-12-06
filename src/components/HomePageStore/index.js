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
import { AiOutlineShoppingCart } from 'react-icons/ai'


import * as C from './styles'
import api from '../../services/api'

export const HomePageStore = () => {

    const [allProducts, setAllProducts] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        showAllProducts()
    }, [])

    const navigate = useNavigate()

    const navigateToInventory = () => {
        navigate('/inventory')
    }

    const showAllProducts = async () => {
        try {
            const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
            setAllProducts(response.data.products)
        } catch (error) {
        }
    }

    const addToCart = async (productId) => {
        const id = allProducts.find((product) => product.id === productId)

        try {
            await api.post(`${process.env.REACT_APP_BACKEND_URL}/cartProducts`, {
                productId: id.id
            })
        } catch (error) {
        }
    }

    return (
        <C.Container>
            <Navbar key={false} bg="light" expand={false}  >
                <Container fluid >
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                    <Navbar.Brand href="#">Bryan Store</Navbar.Brand >
                    <Navbar.Brand href="#">
                        <AiOutlineShoppingCart />
                    </Navbar.Brand>
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
                {allProducts && allProducts.map((product, index) =>
                    <C.CardsProducts key={index} >
                        <C.ImageProduct src={product.imageUrl} />

                        <C.CenterContainerCard>
                            <C.textTitle>{product.name}</C.textTitle>
                            <br />
                            <C.TextPrice>R$ {product.saleValue}</C.TextPrice>
                        </C.CenterContainerCard>

                        <C.DownContainerCard>
                            <C.ButtonAddToCart onClick={() => addToCart(product.id)}>Adicionar ao carrinho</C.ButtonAddToCart>
                        </C.DownContainerCard>
                    </C.CardsProducts>

                )}

            </C.ContainerProducts>
        </C.Container>
    )
}