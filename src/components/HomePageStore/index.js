import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Load } from '../Load'
import * as C from './styles'
import api from '../../services/api'

export const HomePageStore = () => {

    const [allProducts, setAllProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        showAllProducts()

    }, [])

    const navigate = useNavigate()

    const navigateToInventory = () => {
        navigate('/inventory')
    }

    const navigateToCart = () => {
        navigate('/cart')
    }

    const showAllProducts = async () => {
        try {
            const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
            setAllProducts(response.data.products)
            setIsLoading(true)
        } catch (error) {
        }
    }

    const addToCart = async (productId) => {
        try {

            await api.post(`${process.env.REACT_APP_BACKEND_URL}/cartProducts`, {
                productId
            })
        } catch (error) {
        }
    }

    return (
        <>
        <C.Container>
                <Navbar key={false} bg="light" expand={false}  >
                    <Container fluid >
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                        <Navbar.Brand href="#">Bryan Store</Navbar.Brand >
                        <Navbar.Brand href="#">
                            <AiOutlineShoppingCart onClick={navigateToCart} />
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
                    {allProducts.length > 0 && allProducts.map((product, index) =>
                        <C.CardsProducts key={index} >
                            <C.ImageProduct src={product.imageUrl} />
                            <C.TextTitle>{product.name}</C.TextTitle>
                            <C.TextPrice>R$ {product.saleValue}</C.TextPrice>
                            <C.ContaineButton>

                            <C.ButtonAddToCart onClick={() => addToCart(product.id)}>Adicionar ao carrinho</C.ButtonAddToCart>
                            </C.ContaineButton>
                        </C.CardsProducts>

                    )}
                </C.ContainerProducts>
                {!isLoading && <Load />}
                {isLoading && allProducts.length === 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
            </C.Container>
        </>
    )
}