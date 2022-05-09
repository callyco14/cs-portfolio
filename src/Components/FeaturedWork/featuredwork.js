import styled from "styled-components/macro";

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  padding: 0% 5%;
  flex-direction: ${(direction) => direction};
`;

export const Group = styled.div`
  width: 73%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1% 0% 2% 0%;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 2.5em;
  color: #1b5e4e;
`;

export const Box = styled.div`
  padding: 3% 3%;
  width: 30vw;
  height: 28vw;
  background-color: #c4f0b9;
  border-radius: 25px;
  display: flex;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 100%;
  object-fit: contain;
`;
