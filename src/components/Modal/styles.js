import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 400px;
    background-color: white;
`

export const Translucent = styled.div`
    height: 100%;
    width: 100%;
    z-index: 4;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 50%;
`