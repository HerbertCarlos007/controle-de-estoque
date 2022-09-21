import './styleTable.css'
import api from '../../services/api'
import { useState, useEffect, useRef } from 'react'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { Modal } from '../Modal'

export const ShowProducts = () => {

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [brand, setBrand] = useState('')
  const [purchasePrice, setPurchasePrice] = useState('')
  const [showCreationModal, setShowCreationModal] = useState(false)



  const [products, setProducts] = useState([])

  const allProductsRef = useRef()

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
      setProducts(response.data.products)
      allProductsRef.current = response.data
    } catch (error) {
      console.log(error)
    }
  }

  const handleCreationModal = () => {
    setShowCreationModal(true)
  }

  const handleCloseCreationModal = () => {
    setShowCreationModal(false)
  }

  const deleteProducts = async (id) => {
    try {
      await api.delete(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)

    } catch (error) {
      console.log(error)
    }
    await getProducts()
  }

  const getEachProducts = async (id) => {
    try {
      const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)
      const data = response.data.products
      setName(data.name)
      setAmount(data.amount)
      setBrand(data.brand)
      setPurchasePrice(data.purchasePrice)
    } catch (error) {

    }
  }

  const updateProducts = async (id) => {

    try {
      await api.put(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`, {

      })
    } catch (error) {
      console.log(error)
    }
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
            <th scope="col" ><center>Alterar</center></th>
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
              <td><center>R$ {product.purchasePrice.toFixed(2)}</center></td>
              <td><center>R$ {product.saleValue.toFixed(2)}</center></td>
              <td onClick={handleCreationModal}><center><FiEdit /></center></td>
              <td><center><AiOutlineDelete onClick={() => deleteProducts(product.id)} /></center></td>
            </tr>
          )}
        </tbody>
      </table>

      <Modal show={showCreationModal} onClose={handleCloseCreationModal}>
        <div>
          <input type='text' className='inputs-modal' placeholder='Nome'/>
          <input type='text' className='inputs-modal' placeholder='Quantidade'/>
          <input type='text' className='inputs-modal' placeholder='Marca'/>
          <input type='text' className='inputs-modal' placeholder='Preço de custo'/>
          <button className='button-modal-update-produto'>Atualizar Produto</button>
        </div>
      </Modal>
    </div>
  )
}