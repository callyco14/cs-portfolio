import styled from "styled-components/macro"
 
export const Inner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${direction => direction};
    `
 
export const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100vw;
    overflow: hidden;
    padding: 2% 5%;
    background-color: #C4F0B9;
    `
 
export const Links = styled.div`
   display: flex;
   flex-direction: row;
   padding-left: 30%;
   justify-content: space-between;
   align-items: center;
   flex-grow: 1;
   `
 
export const Text = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3em;
    font-weight: 600;
    color: #000000;
    text-decoration: none;
    @media only screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 480px) {
        font-size: 0.7rem;
   }
   `
 
export const Logo = styled.a`
    font-family: 'Montserrat', sans-serif;   
    font-size: 2.5em;
    font-weight: bold;
    color: #000000;
    text-decoration: none;
    @media only screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 480px) {
        font-size: 0.7rem;
   }
   `