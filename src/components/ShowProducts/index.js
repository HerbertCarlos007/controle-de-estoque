import './styleTable.css'
import api from '../../services/api'
import { useState, useEffect } from 'react'

export const ShowProducts = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
    console.log(response.data)
    setProducts(response.data)
  }

  return (
    <div className='container'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Descriçao</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Marca</th>
            <th scope="col">Preço de custo</th>
            <th scope="col">Preço de venda</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) =>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.amount}</td>
              <td>{product.brand}</td>
              <td>{product.purchasePrice}</td>
              <td>{product.saleValue}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}