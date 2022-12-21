import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #412972;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.span`
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 500px;
`

export const ContainerLogin = styled.div`
    padding: 10px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
`

export const InputLogin = styled.input`
    width: 350px;
    height: 40px;
    border: 1px solid #412972;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 15px;
    font-size: ${props=>props.fontSize || '18px'};
    background-color: ${props=>props.backgroundColor || '#fff'};
    color: ${props=>props.color || 'black'};
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
`

export const InputRegister = styled.input`
     width: 350px;
    height: 40px;
    border: 1px solid #412972;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 15px;
    font-size: ${props=>props.fontSize || '18px'};
    background-color: ${props=>props.backgroundColor || '#fff'};
    color: ${props=>props.color || 'black'};
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
`

export const LinkToRegister = styled.a`
    text-decoration: none;
    color: #412972;
    font-weight: 600px;
    cursor: pointer;
`

export const LinkToRetunToLogin = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #412972;
`