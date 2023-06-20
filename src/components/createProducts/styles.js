import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 160px;
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

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 350px;
        height: 40px;
        border: 1px solid #412972;
        border-radius: 5px;
        padding: 0 0.5rem;
        margin: 10px;
    }

    label span:nth-child(1) {
        padding: 0.2rem;
        opacity: 0.7;
    }

    label span:nth-child(2) {
        color: #FFF;
        background-color: #412972;
        padding: 0.25rem;
        border-radius: 5px;
    }
`

export const InputImageUrl = styled.input`
    display: none;
    margin: 10px;
`

export const InputName = styled.input`
    border: 1px solid #412972;
    width: 350px;
    height: 40px;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
`

export const InputDescription = styled.input`
    border: 1px solid #412972;
    width: 350px;
    height: 40px;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
`

export const InputAmount = styled.input`
    border: 1px solid #412972;
    width: 350px;
    height: 40px;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
`

export const InputBrand = styled.input`
    border: 1px solid #412972;
    width: 350px;
    height: 40px;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
`

export const InputPurshacePrice = styled.input`
    border: 1px solid #412972;
    width: 350px;
    height: 40px;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
`

export const ButtonRegisterModal = styled.button`
    width: 180px;
    height: 30px;
    border-radius: 5px;
    background-color: #412972;
    border: 1px solid #412972;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`



