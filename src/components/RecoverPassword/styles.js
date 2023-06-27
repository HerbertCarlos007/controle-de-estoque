import styled from "styled-components";

export const Container = styled.div`
     width: 100%;
    height: 100vh;
    background-color: #412972;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.span`
    font-size: 20px;
    
`

export const NewPasswordContainer = styled.div`
    padding: 40px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
`

export const InputNewPassword = styled.input`
    width: 350px;
    height: 40px;
    border: 1px solid #412972;
    border-radius: 8px;
    text-align: center;
    margin-top: 15px;
`

export const ButtonSaveNewPassword = styled.button`
    width: 300px;
    height: 40px;
    margin-top: 15px;
    border: 1px solid #412972;
    border-radius: 8px;
    background-color: #412972;
    color: white;
    font-size: 18px;
`