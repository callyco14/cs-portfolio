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
  padding: 2% 5%;
  flex-direction: ${(direction) => direction};
  background-color: #94CDBE;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: space-between;
  align-items: top;
  justify-content: left;
  padding: 0% 2%;
`;

export const Content = styled.a`
  width: 100%;
  padding: 0% 0% 2% 0%;
  font-family: "Montserrat", sans-serif;
  font-size: 1.25em;
  color: #000000;
`;

export const Tag = styled.a`
  margin: 0% 1% 0% 0%;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2em;
  font-weight: 500;
  color: #000000;
  background-color: #DEFFCE;
  padding: 5px 10px;
  border-radius: 25px;
`;