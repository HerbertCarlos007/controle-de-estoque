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
  width: 250px;
  height: 250px;
  background-color: #ededed;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleContainerResume = styled.span`
    font-weight: bold;
`


export const TopSectionResume = styled.div`
    padding: 10px;
`

export const CenterSectionResume = styled.div`
  display: flex;
  justify-content: space-between;

`

export const LineResume = styled.div`
    width: 100%;
    height: 2px;
    background-color: #bfbfbf;
`

export const AddDiscount = styled.span`
  color: green;
  cursor: pointer;
  padding: 10px;
  
  :hover {
        opacity: 0.8;
    }
`

export const LeftSectionResume = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  
  span {
    margin-top: 10px;
    font-size: 14px;
  }
`

export const RightSectionResume = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  
  span {
    margin-top: 10px;
    font-size: 14px;
  }
`

export const DownSectionResume = styled.div`
  background-color: #bfbfbf;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const HeaderTable = styled.div`
    display: flex;
    justify-content: space-between;
`

export const HeaderLeftSection = styled.div`
`

export const HeaderRightSection = styled.div`
     width: 800px;
    display: flex;
    justify-content: space-around;
    
    @media (max-width: 1366px) {
        width: 450px;
    }
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
     width: 800px;
    display: flex;
    justify-content: space-around;
    
    @media (max-width: 1366px) {
        width: 450px;
    }
`

export const ProductImage = styled.img`
    width: 70px;
`

export const Teste = styled.div`
    
`

export const ContainerCheckout = styled.div`
    display: flex;
    width: 250px;
    height: 40px;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: white;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px;
    cursor: pointer;
    
    :hover {
        opacity: 0.8;
    }
`