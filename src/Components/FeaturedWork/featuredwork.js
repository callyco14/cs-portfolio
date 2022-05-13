import styled from "styled-components/macro";

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  padding: 1% 5%;
  background-color: #e3efe4;
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
  color: #38614D;
`;

export const Box = styled.div`
  padding: 3% 3%;
  width: 30vw;
  height: 28vw;
  background-color: #c4decc;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  &:hover {
    opacity: 60%;
  }
`;

export const Icon = styled.img`
  width: 100%;
  object-fit: contain;
`;