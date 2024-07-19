import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 40px;
    background-color: #272727;
    justify-content: flex-end;
    color: #FFF;
    display: flex;
`

export const Content = styled.div`
    width: 600px;
    gap: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;

`

export const Line = styled.div`
    color: #FFF;
    width: 30px;
    height: 40px;
`


export const Actions = styled.div`
    display: flex;
    position: relative;
    padding-right: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 1px;
        background-color: #FFF;
    }
`;

export const Icons = styled.div`
    position: relative;
    right: 10px;
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

// export const Actions = styled.div`
//     cursor: pointer;

//     &:hover {
//         color: rgba(0, 0, 0, 0.6);
//     }
// `