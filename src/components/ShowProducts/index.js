import * as C from './styles'

export const ShowProducts = () => {
    return (
        <C.Container>
            <C.CardProducts>
                <C.TitleProduct>Mouse Gamer</C.TitleProduct>
                <C.Description>Mouse rgb</C.Description>
                <C.Quantity>Quantidade: 4</C.Quantity>
                <C.ButtonDelete>Deletar</C.ButtonDelete>
                <C.EditButton>Editar</C.EditButton>
                <C.Price>R$ 40</C.Price>
            </C.CardProducts>
        </C.Container>
    )
}