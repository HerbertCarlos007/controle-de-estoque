import { useState } from 'react';
import ColorPicker from '../ColorPicker'
import { Header } from '../Header'
import * as C from './styles'

export const Configuration = () => {

   const [showColorPicker, setShowColorPicker] = useState(false);

   const handleColorClick = () => {
      setShowColorPicker(!showColorPicker);
   };

   return (
      <>
         <Header>Configuração</Header>
         <C.Container>
            <C.Content>

               <C.Section>
                  <C.Text>Nome da Loja</C.Text>
                  <C.InputStoreName placeholder='Nome da loja'>

                  </C.InputStoreName>
               </C.Section>

               <C.Section>
                  <C.Text>Logotipo</C.Text>
                  <C.UploadImagens for='file'>
                     <span>Selecione a imagem</span>
                     <span>Procurar</span>
                  </C.UploadImagens>
                  <C.InputImageUrl type='file' id='file' name='file' ></C.InputImageUrl>
               </C.Section>

               <C.Section>
                  <C.Text>Background</C.Text>
                  <C.UploadImagens for='file'>
                     <span>Selecione a imagem</span>
                     <span>Procurar</span>
                  </C.UploadImagens>
                  <C.InputImageUrl type='file' id='file' name='file' ></C.InputImageUrl>
               </C.Section>

               <C.Section>
                  <C.Text>Selecionar cor </C.Text>
                  <button onClick={handleColorClick}>
                     {showColorPicker ? 'Fechar Seletor de Cores' : 'Selecionar Cor'}
                  </button>
                  {showColorPicker && <ColorPicker />}
               </C.Section>
            </C.Content>
         </C.Container>

      </>
   )
}
