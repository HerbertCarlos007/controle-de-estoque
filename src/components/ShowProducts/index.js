import './styleTable.css'
import api from '../../services/api'
import { useState, useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

export const ShowProducts = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
    setProducts(response.data.products)
  }

  const deleteProducts = async (id) => {
    try {

      await api.delete(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)
    } catch (error) {
      console.log(error)
    }
    await getProducts()
  }

  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"><center>ID</center></th>
            <th scope="col"><center>Nome</center></th>
            <th scope="col"><center>Quantiade</center></th>
            <th scope="col"><center>Marca</center></th>
            <th scope="col"><center>Preço de custo</center></th>
            <th scope="col"><center>Preço de venda</center></th>
            <th scope="col"><center>Alterar</center></th>
            <th scope="col"><center>Excluir</center></th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product, index) =>
            <tr>
              <th scope="row"><center>{index + 1}</center></th>
              <td><center>{product.name}</center></td>
              <td><center>{product.amount}</center></td>
              <td><center>{product.brand}</center></td>
              <td><center>R$ {product.purchasePrice}</center></td>
              <td><center>R$ {product.saleValue.toFixed(2) }</center></td>
              <td><center><FiEdit /></center></td>
              <td><center><AiOutlineDelete onClick={() => deleteProducts(product.id)} /></center></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}