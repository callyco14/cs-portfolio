import styled from "styled-components/macro"
 
export const Inner = styled.div`
   width: 100%;
   display: flex;
   flex-direction: ${direction => direction};
   `
 
export const Container = styled.div`
   padding: 3% 5%;
   background-color: #C4F0B9;
   `

export const Links = styled.div`
    padding: 0% 30%;
    display: flex;
    flex-direction: row;
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
    `