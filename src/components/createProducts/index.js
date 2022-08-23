import * as C from './styles'
import { useState} from 'react'
import api from '../../services/api'

export const CreateProducts = () => {



    return(
        <C.Container>
            <C.Title>Lista de Produtos</C.Title>
            <C.ButtonsContainer>
               <C.ButtonRegisterProducts>Cadastrar Produto</C.ButtonRegisterProducts>
               <C.ButtonDeleteStock>Deletar Estoque</C.ButtonDeleteStock>
            </C.ButtonsContainer>
        </C.Container>
    )
}