import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
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