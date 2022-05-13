import styled from "styled-components/macro";

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  padding: 0% 5% 2% 5%;
  background-color: #e3efe4;
`;

export const Transformation = styled.div`
width: 100%;
display: flex;
flex-direction: space-between;
align-items: center;
`;

export const Group = styled.div`
  width: 100%;
  padding: 0% 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 2.5em;
  color: #38614D;
`;

export const Content = styled.a`
  padding-top: 2%;
  font-family: "Montserrat", sans-serif;
  font-size: 2em;
  font-weight: 500;
  color: #000000;
`;

export const Picture = styled.img`
  padding: 0% 2%;
  max-width: 85%;
  object: fill;
`;

export const Blurb = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  color: #000000;
`;

export const PicGroup = styled.div`
    width: 100%;
    display: inline-block;
    text-align: center;
    align-items: bottom;
`;