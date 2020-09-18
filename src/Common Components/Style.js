import styled, { css } from "styled-components";
export const Container = styled.div`
  width: 960px;
  margin: 15px auto;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  display: flex;
  @media (max-width: 425px) {
    width: 100%;
    display: block;
  }
`;
export const LeftWrapper = styled.div`
  width: 75%;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const RightWrapper = styled.div`
  width: 25%;
  margin: 25px 0;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const Loader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: absolute;
`;
