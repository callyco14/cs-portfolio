import styled from "styled-components/macro";

export const Inner = styled.div`
    width: 100%
    display: flex;
    flex-direction: ${(direction) => direction};
    align-item:center;
    `;

export const Container = styled.div`
  display: flex;
  padding: 2% 0%;
  flex-direction: ${(direction) => direction};
  background-color: #badcb2;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 3em;
  color: #7b3111;
  font-style: italic;
  font-weight: 500;
`;

export const Group = styled.div`
  display: flex;
  padding: 1% 0%;
  flex-direction: column;
  align-items: center;
`;

export const Start = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 1.75em;
  color: #000000;
`;

export const Philo = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  color: #000000;
  width: 100%;
`;
