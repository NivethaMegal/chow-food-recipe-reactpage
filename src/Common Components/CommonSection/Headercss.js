import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  @media (max-width: 425px) {
    display: block;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 425px) {
    display: ${(props) => (props.show ? "block" : "none")};
  }
`;
export const Li = styled.li`
  padding: 28px 16px 25px 16px;
  color: #707070;
  cursor: pointer;
  margin-left: 5px;
  border-bottom: ${(props) =>
    (props.active && "3px solid #8dc63f") || "3px solid #fff"};
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.color};
  }
  @media (max-width: 425px) {
    padding: 20px;
    border-bottom: 0;
    &:hover {
      border-bottom: 0;
    }
  }
`;
export const A = styled(Link)`
  text-decoration: none;
  color: #707070;
`;
export const I = styled.i`
  color: rgb(196, 196, 196);
`;
export const SortingDropdown = styled.div`
  position: relative;
  width: inherit;
`;
export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 1;
`;
export const DropDownList = styled.ul`
  list-style: none;
  background-color: #333;
  color: #fff;
  width: 78px;
  margin-left: 5px;
  padding: 0 10px;
  font-size: 13px;
  line-height: 37px;
`;
export const ListItem = styled.li`
  padding-left: 5px;
`;
export const DropDownLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const HeaderMenu = styled.a`
  display: none;
  @media (max-width: 425px) {
    display: block;
    width: 30px;
    float: right;
    z-index: 999;
  }
`;
export const HeaderIcon = styled.span`
  background: #000;
  width: 25px;
  height: 3px;
  display: block;
  margin-top: 4px;
  -webkit-transition: all 500ms ease-in-out;
  -o-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
  transition: all 500ms ease-in-out;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
`;

export const LogoutButton = styled.button`
  width: 150px;
  height: 45px;
  background-color: rgb(141, 198, 63);
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 20px;
`;
export const LogoutContent = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 20%;
  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const CloseButton = styled.div`
  color: #aaaaaa;
  float: right;
  font-weight: bold;
  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
