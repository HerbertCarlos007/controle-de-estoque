import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #f2f5f4;
    display: grid;
    grid-template-columns: 100px 100px 100px;
    gap: 20%;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50px;
    padding: 50px;
    
`;

export const CardProducts = styled.div`
   
    min-width: 280px;
    min-height: 180px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px black;
    background-color: white;
    position: relative;
    right: 60px;
    bottom: 38px;
`;

export const TitleProduct = styled.h3``;

export const Description = styled.p``;

export const Quantity = styled.p``;

export const Price = styled.p``;

export const ButtonDelete = styled.button``;

export const EditButton = styled.button``;
