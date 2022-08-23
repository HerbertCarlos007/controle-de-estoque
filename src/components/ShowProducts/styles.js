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
   
    min-width: 250px;
    border-radius: 8px;
    max-height: auto;
    box-shadow: 0px 0px 3px black;
    background-color: white;
    position: relative;
    right: 60px;
    bottom: 38px;
    padding: 5px;
`;

export const TitleProduct = styled.h3`
    font-size: 20px;
    position: relative;
    bottom: 15px;
`;

export const Description = styled.p`
    font-size: 18px;
    position: relative;
    bottom: 20px;
`;

export const Quantity = styled.p`
    display: flex;
    justify-content: end;
    position: relative;
    bottom: 30px;
`;

export const Price = styled.p`
     display: flex;
    justify-content: end;
    position: relative;
    bottom: 45px;
    font-size: 20px;
`;

export const ButtonDelete = styled.button`
    font-size: 20px;
    border: none;
    background-color: transparent;
    color:  #412972;
`;

export const EditButton = styled.button`
    font-size: 20px;
    border: none;
    background-color: transparent;
    color:  #412972;
`;

export const Table = styled.table`
      width: 80%;
      height: 150px;

`;
