import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #412972;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    justify-items: center;
    gap: 50px 0px;
    margin-top: 100px;
    
    @media (min-width: 1600px){
        grid-template-columns: repeat(4, 1fr);
    }

`

export const CardsProducts = styled.div`
   background-color: green;
   width: 300px;
   height: 450px;
   border-radius: 8px;
  
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
export const TopContainerCard = styled.div`
    display: flex;
    justify-content: center;
`

export const CenterContainerCard = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 120px;
`

export const DownContainerCard = styled.div`
    display: flex;
    margin-top: 180px;
    margin-left: 20px;
`