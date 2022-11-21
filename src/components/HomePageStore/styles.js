import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #412972;
`

export const Container = styled.div`

`

export const ContainerProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    justify-items: center;
    gap: 50px 0px;
    /* margin-top: 100px; */
    background-color: #f2f2f2;
    @media (min-width: 1600px){
        grid-template-columns: repeat(4, 1fr);
    }

`

export const CardsProducts = styled.div`
   background-color: white;
   width: 260px;
   height: 300px;
   border-radius: 8px;
   box-shadow: 1px 2px 3px black;
   cursor: pointer;
  
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
    margin-top: 15px;
`

export const CenterContainerCard = styled.div`
    display: flex;
    margin-top: 10px;
    margin-left: 10px;

`

export const DownContainerCard = styled.div`
    display: flex;
    margin-left: 10px;
    margin-top: 30px;
`

export const textTitle = styled.h4`
    text-decoration: none;

`

export const TextPrice = styled.span`
    font-size: 20px;
    font-weight: bold;
`

export const ImageProduct = styled.img`
    border-radius: 8px;
    max-width: 200px;
    
`