import styled, { css } from "styled-components";
export const ShoppingCard = styled.div``;
export const SortingDropdown = styled.div`
  width: 215px;
  position: relative;
  border: 1px solid #ddd;
  cursor: pointer;
`;
export const Card = styled.div`
  width: 213px;
  margin: 20px 20px 0 0;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const ProductImg = styled.div`
  position: relative;
`;
export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 5px;
`;
export const Img = styled.img`
  width: 100%;
  position: relative;
  cursor: pointer;
`;
export const ProductName = styled.h5`
  color: #707070;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
  margin: 0;
`;
export const Tag = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #aaa;
`;
export const Amount = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #606060;
  padding: 1px 0 5px 0;
  display: block;
`;
export const ProductDescription = styled.div`
  padding: 16px 0 15px 0;
  text-align: center;
  background-color: #f8f8f8;
`;
export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const DropDownHeader = styled.button`
  padding: 0 0 0 12px;
  width: 215px;
  text-align: start;
  cursor: pointer;
  color: #909090;
  outline: none;
  background-color: #fff;
  white-space: nowrap;
  font-size: 13px;
  position: relative;
  border: 0;
  font-family: inherit;
  line-height: 37px;
  font-weight: 600;
`;
export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 1;
`;
export const DropDownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 215px;
  color: #909090;
  background-color: #fff;
  font-size: 13px;
  line-height: 37px;
`;
export const CartIcon = styled.button`
  color: #fff;
  border: none;
  outline: 0;
  width: 37px;
  cursor: pointer;
  height: 37px;
  background-color: ${({ theme }) => theme.color};
  right: 0;
  bottom: 0;
  position: absolute;
  visibility: ${(props) => (props.hover ? "visible" : "hidden")};
  &:hover {
    background-color: #808080;
    color: #fff;
  }
`;
export const ListItem = styled.li`
  color: ${(props) => (props.hover ? "#fff" : "#909090")};
  background-color: ${(props) =>
    props.hover ? ({ theme }) => theme.color : "#fff"};
  padding-left: 10px;
`;
