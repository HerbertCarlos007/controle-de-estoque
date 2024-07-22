import React, {useState} from 'react'
import * as C from './styles'
import { useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoPersonSharp } from "react-icons/io5";
import { PiShoppingCartBold } from "react-icons/pi";
import { GiLockedChest } from "react-icons/gi";



export const HeaderStore = ({setIsVisible}) => {

    const navigate = useNavigate()

    return (
        <C.Container>
            <C.Content>
                <C.Actions >
                    <C.Icons>
                        <GiLockedChest />
                    </C.Icons>
                    Meus pedidos
                </C.Actions>

                <C.Actions onClick={() => navigate('/')}>
                    <C.Icons>
                        <IoPersonSharp size={18} />
                    </C.Icons>
                    Entre ou cadastre-se
                </C.Actions>

                <C.Actions onClick={() => setIsVisible(true)}>
                    <C.Icons >
                        <PiShoppingCartBold size={18} />
                    </C.Icons>
                    Meu carrinho
                </C.Actions>

            </C.Content>
        </C.Container>
    )
}