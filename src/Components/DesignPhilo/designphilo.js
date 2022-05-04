import styled from "styled-components/macro"

export const Inner = styled.div`
    width: 100%
    display: flex;
    flex-direction: ${direction => direction};
    `

export const Container = styled.div`
    display: flex;
    padding: 2% 0%;
    flex-direction: ${direction => direction};
    background-color: #BADCB2;
    justify-content: center;
    `

export const Title = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-size: 3em;
    color: #7b3111;
    font-style: italic;
    font-weight: 500;
    `

export const Group = styled.div`
    display: flex;
    padding: 1% 0%;
    flex-direction: column;
    align-items: center;
`

export const Start = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.75em;
    color: #000000;
    `

export const Philo = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    color: #000000;
    `