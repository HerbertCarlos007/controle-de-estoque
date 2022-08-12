import * as C from './styles'

export const CreateProducts = () => {
    return(
        <C.Container>
            <C.Title>Lista de Produtos</C.Title>
            <C.ButtonsContainer>
               <C.ButtonRegisterProducts>Cadastrar Novo Produto</C.ButtonRegisterProducts>
               <C.ButtonDeleteStock>Deletar Estoque</C.ButtonDeleteStock>
            </C.ButtonsContainer>
        </C.Container>
    )
}