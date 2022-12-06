import './styleTable.css'
import api from '../../services/api'
import { useState, useEffect, useRef } from 'react'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { Modal } from '../Modal'
import Swal from 'sweetalert2'
import { CreateProducts } from '../CreateProducts'



export const ShowProducts = () => {

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [brand, setBrand] = useState('')
  const [purchasePrice, setPurchasePrice] = useState('')
  const [showCreationModal, setShowCreationModal] = useState(false)
  const [selectedId, setSelectedId] = useState('')

  useEffect(() => {
    getProducts()
  }, [])

  const [products, setProducts] = useState([])

  const allProductsRef = useRef()

  const handleCreationModal = () => {
    setShowCreationModal(true)
  }

  const handleCloseCreationModal = () => {
    setShowCreationModal(false)
  }

  const handleName = (e) => {
    const textName = e.target.value
    setName(textName)
  }

  const handleAmount = (e) => {
    const textAmount = e.target.value
    setAmount(textAmount)
  }

  const handleBrand = (e) => {
    const textBrand = e.target.value
    setBrand(textBrand)
  }

  const handlePurchasePrice = (e) => {
    const textPurchasePrice = e.target.value
    setPurchasePrice(textPurchasePrice)
  }

  const getProducts = async () => {
    try {
      const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
      setProducts(response.data.products)
      allProductsRef.current = response.data.products
    } catch (error) {
      console.log(error)
    }
  }

  const getEachProducts = async (id) => {
    try {
      const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)
      const data = response.data
      setName(data.name)
      setAmount(data.amount)
      setBrand(data.brand)
      setPurchasePrice(data.purchasePrice)
      setSelectedId(id)
    } catch (error) {

    }
  }

  const updateProducts = async (id) => {
    try {
      const response = await api.put(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`, {
        id,
        name,
        amount,
        brand,
        purchasePrice
      })

      if (response.status === 204) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Produto atualizado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
      }

    } catch (error) {
      console.log(error)
    }
    handleCloseCreationModal()
    getProducts()
  }

  const deleteProducts = async (id) => {
    try {
      const response = await api.delete(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)

      if (response.status === 204) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Produto deletado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
      }

    } catch (error) {
    }
    await getProducts()
  }

  return (
    <>
      <CreateProducts />
      <div className='container'>
        <table className="table responsive">
          <thead>
            <tr>
              <th scope="col"><center>ID</center></th>
              <th scope="col"><center>Nome</center></th>
              <th scope="col"><center>Quantidade</center></th>
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
                <td><center>R$ {product.purchasePrice}</center></td>
                <td><center>R$ {product.saleValue}</center></td>
                <td onClick={() => getEachProducts(product.id)} ><center><FiEdit onClick={handleCreationModal} /></center></td>
                <td><center><AiOutlineDelete onClick={() => deleteProducts(product.id)} /></center></td>
              </tr>
            )}
          </tbody>
        </table>

        <Modal show={showCreationModal} onClose={handleCloseCreationModal}>
          <div>
            <input type='text' className='inputs-modal' placeholder='Nome' onChange={handleName} value={name} />
            <input type='text' className='inputs-modal' placeholder='Quantidade' onChange={handleAmount} value={amount} />
            <input type='text' className='inputs-modal' placeholder='Marca' onChange={handleBrand} value={brand} />
            <input type='text' className='inputs-modal' placeholder='Preço de custo' onChange={handlePurchasePrice} value={purchasePrice} />
            <button className='button-modal-update-produto' onClick={() => updateProducts(selectedId)}>Atualizar Produto</button>
          </div>
        </Modal>
      </div>
    </>
  )
}
