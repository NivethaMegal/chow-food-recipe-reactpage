import styled, { css } from "styled-components";
export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  display: flex;
  @media (max-width: 425px) {
    width: 100%;
    display: block;
  }
`;
export const LeftWrapper = styled.div`
  width: 25%;
  @media (max-width: 425px) {
    width: 100%;
    margin: 10px;
  }
`;
export const RightWrapper = styled.div`
  width: 75%;
  margin-left: 15px;
  @media (max-width: 425px) {
    width: 100%;
    margin: 10px;
  }
`;
export const PageBar = styled.div`
  background-color: #f6f6f6;
  min-height: 88px;
  margin: 0 0 40px 0;
`;
export const PageName = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 29px 0 0 0;
  color: #606060;
`;
export const PageDenote = styled.div`
  color: #909090;
  margin-top: 35px;
  font-size: 13px;
`;
export const HomeTag = styled.span`
  font-weight: 600;
`;
export const ShopPage = styled.div``;
export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 425px) {
    display: block;
    margin: 10px;
  }
`;
export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
`;
export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  cursor: pointer;
  right: 45px;
  color: #fff;
  font-size: 30px;
`;
export const OverlayContent = styled.div`
  position: relative;
  color: #818181;
  display: block;
  transition: 0.3s;
  text-align: center;
  margin-top: 30px;
  &:hover {
    color: #f1f1f1;
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
