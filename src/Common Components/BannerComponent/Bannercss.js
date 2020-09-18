import styled, { css } from "styled-components";
import {Link} from "react-router-dom";
export const BannerDiv = styled.div`
  width: 100%;
  height: 415px;
  background-color: rgba(0, 0, 0, 0.3);
  @media (max-width: 425px) {
    width:100%;
  }
`;
export const Img = styled.img`
  height: inherit;
  width: inherit;
  position: absolute;
  z-index: -1;
`;
export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 425px) {
    width:100%;
  }
`;
export const BannerContent = styled.div`
  position: relative;
  top: 95px;
  margin: 0 25px;
  color: #fff;
`;
export const BannerHeadTitle = styled.div`
  width: 400px;
  cursor:pointer;
  @media (max-width: 375px) {
    width: 290px;
  }
`;
export const BannerHead = styled.h2`
  margin: 0;
  margin-top: 14px;
`;
export const BannerDetails = styled.ul`
  list-style: none;
  display: flex;
  margin: 8px 0 0 0;
  padding: 0;
`;
export const Li = styled.li`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  margin: 0 15px 0 0;
  padding-left: 5px;
  @media (max-width: 425px) {
    margin: 0;
  padding-left: 0;
  }
`;
export const A = styled(Link)`
  text-decoration: none;
  font-size: 48px;
  line-height: 50px;
  font-family: "Arvo", serif;
  color: #fff;
  font-weight: 500;
`;
export const BakingTag = styled.li`
  background-color: ${({ theme }) => theme.color};
  font-weight: 300;
  text-transform: uppercase;
  font-size: 13px;
  padding: 5px 9px;
  list-style: none;
  width: 46px;
  text-align:center;
`;
export const ViewRecipe = styled.button`
  border: 3px solid #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 0;
  width: 130px;
  cursor:pointer;
  margin-top: 18px;
  outline:none;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
export const BannerList = styled.div`
  display: flex;
  @media (max-width: 425px) {
   display:none;
  }
`;
export const BannerListButton = styled.button`
  background-color: ${props=>(props.index ?  ({ theme }) => theme.color : "#f2f2f2")};
  color : ${props=>(props.index ?  "#fff" : "#808080")};
  border-left: 1px solid #e3e3e3;
  border-right:0;
  cursor:pointer;
  border-top:0;
  border-bottom:0;
  outline:none;
  padding: 20px;
  font-family:inherit;
  font-size:16px;
  height: 75px;
  width: 235px;
  line-height: 18px;
  font-weight: 700;
`;
