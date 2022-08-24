import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 160px;
    display :inline-block;
    
`;

export const Title = styled.h1`
    font-size: 50px;
    color: black;
    margin: 0;
    display: flex;
    justify-content: center;
    position: relative;
    top: 25px;
    
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    position: relative;
    top: 55px;
`;

export const ButtonRegisterProducts = styled.button`
    width: 180px;
    height: 30px;
    border-radius: 5px;
    background-color: #412972;
    border: 1px solid #412972;
    color: white;
    cursor: pointer;
`;

export const ButtonDeleteStock = styled.button`
     width: 180px;
     height: 30px;
     background-color: transparent;
     border-radius: 5px;
     border: 1px solid #412972;
     cursor: pointer;
`;
