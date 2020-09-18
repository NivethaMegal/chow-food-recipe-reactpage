import styled, { css } from "styled-components";
export const Heading = styled.div`
  background-color: #505050;
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  padding: 8px 15px;
`;
export const Icon = styled.div`
  background-color: #505050;
  color: #fff;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  ${props=>props.visible ? 
  "right: -35px;" :
  "left:0;"}
  top: 0;
`;
export const Color = styled.div`
  display: flex;
  padding: 2px 18px 10px 18px;
  flex-wrap: wrap;
  width: 170px;
  background: #606060;
`;
export const Button = styled.button`
  width: 17px;
  height: 17px;
  background-color: ${(props) => props.color};
  outline: none;
  margin: 4px 2px 0 2px;
  border: none;
`;
export const Switcher = styled.div`
  width: 206px;
  position: relative;
  position:fixed;
`;
export const ToggleStyleSwitcher = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  background: #606060;
`;
