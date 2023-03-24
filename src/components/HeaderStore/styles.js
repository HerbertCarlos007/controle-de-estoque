import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #412972;
    color: #FFF;
`

export const Content = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;

`

export const Menu = styled.div`
    cursor: pointer;
    
    &:hover {
        color: rgba(0, 0, 0, 0.6);
    }
`

export const Title = styled.span`
    font-size: 24px;
`

export const Actions = styled.div`
    cursor: pointer;

    &:hover {
        color: rgba(0, 0, 0, 0.6);
    }
`