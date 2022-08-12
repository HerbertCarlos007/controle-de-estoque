import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 220px;
    display :inline-block;
`;

export const Title = styled.h1`
    font-size: 50px;
    color: black;
    margin: 0;
    display: flex;
    justify-content: center;
    position: relative;
    top: 60px;  
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    position: relative;
    top: 100px;

`;

export const ButtonRegisterProducts = styled.button`
    width: 180px;
    height: 25px;
    border-radius: 5px;
    background-color: #412972;
    border: 1px solid #412972;
    color: white;
`;

export const ButtonDeleteStock = styled.button`
     width: 180px;
     height: 25px;
     background-color: transparent;
     border-radius: 5px;
     border: 1px solid #412972;
`;