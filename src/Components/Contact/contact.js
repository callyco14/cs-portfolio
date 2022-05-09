import styled from "styled-components/macro";

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  padding: 0% 5%;
  flex-direction: ${(direction) => direction};
`;

export const Group = styled.div`
  padding-top: 1%;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 2.5em;
  color: #1b5e4e;
`;

export const Tagline = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 2em;
  color: #000000;
  font-weight: 600;
`;

export const Content = styled.a`
  padding: 1% 0%;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  color: #000000;
`;

export const Icon = styled.img`
  padding-right: 2%;
`;