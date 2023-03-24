import React from 'react'
import * as C from './styles'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'


export const HeaderStore = ({setIsVisible}) => {
    return (
        <C.Container>
            <C.Content>
                <C.Menu onClick={() => setIsVisible(true)}>
                    <AiOutlineMenu size={24} />
                </C.Menu>
                <C.Title>Loja de Roupas</C.Title>
                <C.Actions>
                    <AiOutlineShoppingCart size={24}/>
                </C.Actions>
            </C.Content>
        </C.Container>
    )
}