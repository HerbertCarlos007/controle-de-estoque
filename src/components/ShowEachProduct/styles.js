import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 60px;
    background-color: #412972; 
    box-shadow: 0px 1px 8px black;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
`

export const CardEachProduct = styled.div`
    width: 800px;
    height: 400px;
    display: flex;
    border-radius: 8px;
    box-shadow: 1px 2px 3px black;
`
export const ProductImage = styled.img`
    width: 400px;
    height: 400px;
    padding: 10px;
`

export const RightSideContainer = styled.div`   
`

export const TitleProduct = styled.h2`
    position: relative;
    top: 32px;
    left: 20px;
`
export const TextPrice = styled.h3`
    position: relative;
    top: 50px;
    left: 20px;
`

export const ButtonBuy = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 8px;
    background-color: #412972;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    position: relative;
    top: 80px;
    left: 15px;
`
