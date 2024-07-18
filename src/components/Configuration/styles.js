import styled from "styled-components";

export const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient(45deg,black,rgb(103, 130, 204, 0.6));
height: 100vh;
`

export const Content = styled.div`
`

export const UploadImagens = styled.label`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    height: 40px;
    border: 1px solid #412972;
    border-radius: 5px;
    padding: 0 0.5rem;
    margin: 10px;
    cursor: pointer;

    span:nth-child(1) {
        padding: 0.2rem;
        opacity: 0.7;
    }

    span:nth-child(2) {
        color: #FFF;
        background-color: #412972;
        width: 120px;
        padding: 3px;
        text-align: center;
        border-radius: 5px;
    }
`

export const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`

export const Text = styled.span`
    width: 100px;
`

export const InputStoreName = styled.input`
    width: 350px;
    height: 40px;
    border: 1px solid #412972;
    border-radius: 5px;
    padding: 0 0.5rem;
    margin: 10px;
`

export const InputImageUrl = styled.input`
    display: none;
    margin: 10px;
`
