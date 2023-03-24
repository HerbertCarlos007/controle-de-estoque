import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`

export const ContainerProducts = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    justify-items: center;
    @media (min-width: 1600px){
        grid-template-columns: repeat(4, 1fr);
    }

`
export const CardsProducts = styled.div`
   background-color: white;
    width: 300px;
    padding: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border-radius: 8px;
   box-shadow: 1px 2px 3px black;
`

export const TextTitle = styled.span`
   
`

export const TextPrice = styled.span`
    font-size: 20px;
    font-weight: bold;
`

export const ImageProduct = styled.img`
    border-radius: 8px;
    width: 80px;
    height: 80px;
    
`

export const ButtonAddToCart = styled.button`
    font-size: 18px;
    border-radius: 8px;
    width: 200px;
    height: 30px;
    background-color:  #412972;
    color: white;
    
`

export const ContaineButton = styled.div`   
    margin-top: 30px;
`