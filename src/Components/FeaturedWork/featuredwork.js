import styled from "styled-components/macro";

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(direction) => direction};
`;

export const Container = styled.div`
  padding: 3% 5%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  padding: 2%;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 2.5em;
  color: #1b5e4e;
`;

export const Box = styled.div`
  margin: 0% 2%;
  width: 30vw;
  height: 25vw;
  background-color: #c4f0b9;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Icon = styled.img`
  margin: 0;
  width: 100%;
  object-fit: contain;
`;
