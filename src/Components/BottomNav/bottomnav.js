import styled from "styled-components/macro"
 
export const Inner = styled.div`
   width: 100%;
   display: flex;
   flex-direction: ${direction => direction};
   justify-content: space-between;
   `
 
export const Container = styled.div`
   position: relative;
   bottom: 0;
   overflow: hidden;
   padding: 1% 5%;
   background-color: #e3efe4;
   `

export const Links = styled.div`
   width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    `
 
export const Text = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3em;
    font-weight: 600;
    text-decoration: none;
    color: #000000;
    &:hover {
        color: #38614D;;
      }
    `

export const Group = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

export const Icon = styled.img`
   width: 2.5vw;
   `;