import styled from "styled-components";


export const Header = styled.div`
    width: 100%;
    height: 80px;
    background-image: linear-gradient(45deg,black,rgb(103, 130, 204, 0.9));
`

export const Container = styled.div`
    width: 430px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #FFF;
    z-index: 9999;
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9998;
    background-color: black;
    opacity: 50%;
`

export const HeaderCart = styled.div`
    background-color: #0e0e0d;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    
`

export const Title = styled.span`
    color: #FFF;
    font-weight: bold;
`

export const ButtonClose = styled.span`
    color: #FFF;
    font-weight: bold;
    cursor: pointer;
`

export const CartItens = styled.div`
    min-height: calc(100vh - 315px);
    max-height: calc(100vh - 315px);
    overflow-y: auto;
    overflow-x: hidden;
    margin: 5px 10px;
    padding: 0;
`

export const Card = styled.div`
    padding: 12px 20px;
    margin: 15px;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    min-height: 115px;
    position: relative;
    box-shadow: 0px 0px 7px 2px #e6e6e6;
`

export const ContentCard = styled.div`
    display: flex; 
    justify-content: space-between;
`

export const InfoItens = styled.div`
    padding: 20px;
    background: #f2f2f2;
    border-top: #e1e1e1;
    flex-direction: column;
    display: flex;
`

export const Texts = styled.h5`
`

export const TypePayments = styled.span`
`

export const Value = styled.span`
    font-weight: bold;
    color: #00805b;
`

export const FinalValue = styled.div`
    border-bottom: 1px solid #e1e1e1;
    padding: 3px 0;
    align-items: center;
    justify-content: space-between;
    display: flex;
    
    &:last-child {
        border-bottom: none;
    }
`

export const Checkout = styled.div`
    margin-top: 20px;
    padding: 20px;
    background: #f2f2f2;
`

export const ProductImage = styled.div`
   
`

export const Image = styled.img`
    width: 80px;
    height: 80px;
    
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Adiciona este estilo */
  flex: 1; /* Adiciona flex-grow para expandir o espaço disponível */
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

export const ProductName = styled.span`
  margin-left: 10;
  text-align: left;
  margin-left: 10px;
`

export const ProductColor = styled.span`
    font-size: 11px;
`

export const ProductSize = styled.span`
    font-size: 11px;
`

export const SectionPriceAndQuantity = styled.div`
    display: flex;
    align-items: center;
    gap: 70px;
`

export const Price = styled.span`
    font-weight: bold;
    margin-top: 5px;
`

export const TextQuantity = styled.span`
`

export const Quantity = styled.span`
`

export const ProductRemove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonCheckout = styled.div`
    text-transform: uppercase;
    font-size: 1.0625em;
    font-weight: bold;
    background: #00805b;
    border: none;
    border-radius: 40px;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    
`

export const Background = styled.div`
     background-image: linear-gradient(45deg,black,rgb(103, 130, 204, 0.6));
     height: 100vh;
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