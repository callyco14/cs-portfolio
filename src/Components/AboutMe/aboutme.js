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
  padding: 0% 0% 2% 0%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Text = styled.div`
  padding: 0% 0%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 2.5em;
  color: #1b5e4e;
`;

export const Name = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 2.5em;
  color: #1b5e4e;
  font-weight: 600;
  line-height: 2em;
  letter-spacing: 3px;
`;

export const Content = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  color: #000000;
`;

export const Picture = styled.img`
  width: 30%;
  padding-left: 10%;
`;
