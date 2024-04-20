import { useState } from 'react';
import ColorPicker from '../ColorPicker'
import { Header } from '../Header'
import * as C from './styles'
import api from '../../services/api';

export const Configuration = () => {

   const [showColorPicker, setShowColorPicker] = useState(false);
   const [selectedColor, setSelectedColor] = useState('');
   const [file, setFile] = useState('');
   const [name, setName] = useState('')
   const [logo, setLogo] = useState('')
   const [background, setBackground] = useState('')
   const [colors, setColors] = useState('')

   const handleColorClick = () => {
      setShowColorPicker(!showColorPicker);
   };

   const handleColorChange = (color) => {
      setColors(color);
   };

   const uploadImage = (e) => {
      const file = e.target.files[0];
      setFile(file);
   }

   const handleStoreName = (e) => {
      setName(e.target.value)
   }



   const handleLogo = (e) => {
      setLogo(e.target.value)
   }

   const handleBackground = (e) => {
      setBackground(e.target.value)
   }



   const saveConfiguration = async (e) => {
      const store_id = localStorage.getItem("store_id")
      await api.post(`${process.env.REACT_APP_BACKEND_URL}/customFields`, {
         name, logo, background, colors, store_id
      })
   }

   return (
      <>
         <Header>Configuração</Header>
         <C.Container>
            <C.Content>
               <C.Section>
                  <C.Text>Nome da Loja</C.Text>
                  <C.InputStoreName placeholder='Nome da loja' onChange={handleStoreName}></C.InputStoreName>
               </C.Section>
               <C.Section>
                  <C.Text>Logotipo</C.Text>
                  <C.UploadImagens for='file'>
                     <span>Selecione a imagem</span>
                     <span>Procurar</span>
                  </C.UploadImagens>
                  <C.InputImageUrl type='file' id='file' name='file' onChange={handleLogo}></C.InputImageUrl>
               </C.Section>
               <C.Section>
                  <C.Text>Background</C.Text>
                  <C.UploadImagens for='file'>
                     <span>Selecione a imagem</span>
                     <span>Procurar</span>
                  </C.UploadImagens>
                  <C.InputImageUrl type='file' id='file' name='file' onChange={handleBackground}></C.InputImageUrl>
               </C.Section>
               <C.Section>
                  <C.Text>Selecionar cor </C.Text>
                  <button onClick={handleColorClick}>
                     {showColorPicker ? 'Fechar Seletor de Cores' : 'Selecionar Cor'}
                  </button>
                  {showColorPicker && <ColorPicker onColorChange={handleColorChange} />}
               </C.Section>
               <p>Selected color in Configuration: {selectedColor}</p>

               <button onClick={saveConfiguration}>salvar</button>
            </C.Content>
         </C.Container>
      </>
   )
}
