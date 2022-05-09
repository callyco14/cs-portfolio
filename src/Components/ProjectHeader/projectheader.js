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

export const Transformation = styled.div`
width: 100%;
display: flex;
flex-direction: space-between;
align-items: center;
`;

export const Group = styled.div`
  width: 100%;
  padding: 0% 1% 2% 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 2.5em;
  color: #1b5e4e;
`;

export const Content = styled.a`
  padding-top: 2%;
  font-family: "Montserrat", sans-serif;
  font-size: 2em;
  font-weight: 500;
  color: #000000;
`;

export const Picture = styled.img`
  height: 400px;
  border-radius: 25px;
`;
