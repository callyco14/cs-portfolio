import styled from "styled-components/macro";

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  padding: 2% 5%;
  flex-direction: row;
`;

export const Text = styled.div`
  padding: 0% 2%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 2em;
  font-weight: 600;
  color: #1b5e4e;
`;

export const Content = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  color: #000000;
`;

export const Picture = styled.img`
  width: 25%;
`;
