import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    height: 60x;
    background-color: #412972;
    padding: 15px;
    box-shadow: 0px 1px 8px black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TitleHeader = styled.h3`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  
   
`;

export const Menu = styled.div`
    cursor: pointer;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        color: rgba(0, 0, 0, 0.6);
    }
`

export const RightSide = styled.div`
    display: flex;
    width: 120px;
    justify-content: space-between;
    align-items: center
    
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






