import styled from "styled-components/macro";

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  padding: 0% 5% 2% 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: space-between;
  align-items: top;
`;

export const PicGroup = styled.div`
    width: 100%;
    display: inline-block;
    text-align: center;
    align-items: bottom;
`;

export const Title = styled.h2`
    padding: 2% 0% 0% 0%;
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
  padding: 2% 2% 0% 2%;
  max-width: 25%;
  object-fit: contain;
`;
