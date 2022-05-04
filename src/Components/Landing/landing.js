import styled from "styled-components/macro";

export const Inner = styled.div`
    width: 100%
    display: flex;
    flex-direction: ${(direction) => direction};
    `;

export const Container = styled.div`
  display: flex;
  padding: 0% 5%;
  flex-direction: ${(direction) => direction};
`;

export const Intro = styled.div`
  padding: 2% 0% 0% 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Group = styled.div`
  padding: 0% 0%;
`;

export const Greeting = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 3em;
  color: #000000;
`;

export const Name = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 4em;
  color: #209c89;
  font-weight: bold;
`;
export const Position = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 2em;
  color: #09719d;
  font-weight: 500;
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
