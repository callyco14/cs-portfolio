import styled from "styled-components/macro";

export const Inner = styled.div`
    width: 100%
    display: flex;
    flex-direction: ${(direction) => direction};
    align-item:center;
    `;

export const Container = styled.div`
  display: flex;
  padding: 0% 0% 2% 0%;
  flex-direction: ${(direction) => direction};
  background-color: #c4decc;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 3em;
  color: #8B855A;
  font-style: italic;
  font-weight: 600;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
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
  width: 75%;
`;
