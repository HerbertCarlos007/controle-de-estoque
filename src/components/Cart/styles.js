import styled from "styled-components";


export const Header = styled.div`
    width: 100%;
    height: 80px;
    background-color: #412972;
`

export const Container = styled.div`
    display: flex;
    margin: 100px;
    gap: 30px;
`

export const ContainerCart = styled.div`
   width: 100%;
`

export const ContainerResume = styled.div`
    width: 300px;
    height: 300px;
    background-color: red;
    
`

export const HeaderTable = styled.div`
    display: flex;
    justify-content: space-between;
`

export const HeaderLeftSection = styled.div`
`

export const HeaderRightSection = styled.div`
    width: 750px;
    display: flex;
    justify-content: space-evenly;
`

export const ColumnValue = styled.span`
    font-size: 20px;
`

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: #edf0ee;
    margin-top: 10px;
`

export const ContentTable = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 40px;
`

export const RowValue = styled.span`
`

export const ContainerActions = styled.div`
    display: flex;
    width: 100px;
    height: 20px;
    background-color: #edf0ee;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    
    span {
        font-weight: bold;
        cursor: pointer;
    }
    
`

export const ContentTableLeftSection = styled.div`
    display: flex;
`

export const ContentTableRightSection = styled.div`
     width: 750px;
    display: flex;
    justify-content: space-evenly;
`

export const ProductImage = styled.img`
    width: 70px;
`