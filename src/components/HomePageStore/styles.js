import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const TopSection = styled.div`
    width: 900px;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

export const StoreName = styled.h2`
`

export const ContainerFilters = styled.div`
    display: flex;
    gap: 30px;

`

export const OptionFilters = styled.span`
    cursor: pointer;
    font-weight: bold;
`

export const ContainerProducts = styled.div`
    margin-top: 40px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 300px);
    flex-wrap: wrap;
    justify-items: center;
`
export const CardsProducts = styled.div`
   background-color: white;
    width: 280px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border-radius: 2px;
   margin-bottom: 20px;
   cursor: pointer;
`
export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
`

export const TextTitle = styled.span`
   font-size: 20px;
   font-weight: 400;
   white-space: nowrap;
`

export const TextPrice = styled.span`
    font-size: 18px;
    font-weight: bold;
`

export const ImageProduct = styled.img`
    border-radius: 8px;
    
`

export const ButtonAddToCart = styled.button`
    font-size: 18px;
    border-radius: 5px;
    width: 240px;
    height: 35px;
    background-color: #412972;
    color: white;
    
`

export const ContaineButton = styled.div`   
    margin-top: 20px;
`

export const InputSearch = styled.input`
    margin-top: 20px;
    width: 300px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 8px;
    padding: 10px;
    font-size: 20px;
`

export const IconSearch = styled.div`
     position: relative;
     bottom: 35px;
    left: 110px;
    
`