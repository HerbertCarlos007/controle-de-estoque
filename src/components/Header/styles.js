import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    height: 55px;
    background-color: #412972; 
    box-shadow: 0px 1px 8px black;
`;

export const TitleHeader = styled.h3`
    color: white;
    margin: auto;
    position: relative;
    left: 45px;
    top: 15px;  
`;

export const LeftSide = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 15px;
    position: relative;
    bottom: 20px;
    gap: 30px;
`

export const textNavBar = styled.span`
    font-size: 20px;
    color: white;
    cursor: pointer;

`
export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const Input = styled.input`
     border: 1px solid #412972;
    width: 350px;
    height: 40px;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 15px;
`

export const Text = styled.span`
    font-size: ${props=>props.fontSize || '20px'};
    font-weight: ${props=>props.fontWeight || '600px'};
    margin-bottom: 10px;
`

export const LinkToRegister = styled.a`

`






