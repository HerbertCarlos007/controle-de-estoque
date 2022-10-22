import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #412972;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    flex-wrap: wrap;
    justify-items: center;

 
`

export const CardsProducts = styled.div`
   background-color: green;
   width: 300px;
   height: 200px;
  
`



export const HeaderSideLeft = styled.div`
    display: flex;
    margin-left: 30px;

`


export const HeaderSideRight = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 30px;
`

export const TextCard = styled.span`
    color: black;
`