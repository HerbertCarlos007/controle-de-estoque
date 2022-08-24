import React, {useState} from 'react'
import { Container, Translucent, Wrapper } from './styles'

export const Modal = ({ show, children, onClose }) => {
    

    return (
        <>
            {show ?
                <>
                    <Wrapper>
                    <Container>{children}</Container>
                    <Translucent onClick={onClose}></Translucent>
                    </Wrapper>
                </> : ''}

        </>
    )
}