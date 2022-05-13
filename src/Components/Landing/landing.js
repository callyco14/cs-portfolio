import styled from "styled-components/macro";

export const Inner = styled.div`
    width: 100%
    display: flex;
    flex-direction: ${(direction) => direction};
    `;

export const Container = styled.div`
  padding: 2% 5% 0% 5%;
  background-color: #e3efe4;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Group = styled.div`
  padding: 0% 0%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Greeting = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 3em;
  color: #000000;
`;

export const Name = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 4em;
  color: #38614D;
  font-weight: bold;
`;
export const Position = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 2em;
  color: #8B855A;
  font-weight: 600;
  text-decoration: none;
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
export const Picture = styled.img`
  width: 32%;
  padding-left: 15%;
`;
