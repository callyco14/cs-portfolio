import styled from "styled-components/macro"
 
export const Inner = styled.div`
   width: 100%;
   display: flex;
   flex-direction: ${direction => direction};
   `
 
export const Container = styled.div`
    padding: 3% 5%;
   `

export const Section = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   `

export const Group = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    padding: 2%;
    `

export const Title  = styled.h2`
   font-family: 'Montserrat', sans-serif;
   font-size: 2.5em;
   color: #1b5e4e;
   `
 
export const Box = styled.div`
    padding: 2%;
    margin: 0% 2%;
    width: 50%;
    height: same-as-width;
    background-color: #C4F0B9;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    `

export const Icon = styled.img`
    width: 40%;
`