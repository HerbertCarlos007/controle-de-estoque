import './styleTable.css'
import api from '../../services/api'
import { useState, useEffect } from 'react'
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'

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
            <th scope="col"><center>ID</center></th>
            <th scope="col"><center>Nome</center></th>
            <th scope="col"><center>Marca</center></th>
            <th scope="col"><center>Preço de custo</center></th>
            <th scope="col"><center>Preço de venda</center></th>
            <th scope="col"><center>Alterar</center></th>
            <th scope="col"><center>Excluir</center></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) =>
            <tr>
              <th scope="row"><center>{index + 1}</center></th>
              <td><center>{product.name}</center></td>
              <td><center>{product.brand}</center></td>
              <td><center>R$ {product.purchasePrice}</center></td>
              <td><center>R$ {product.saleValue}</center></td>
              <td><center><FiEdit/></center></td>
              <td><center><AiOutlineDelete/></center></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}