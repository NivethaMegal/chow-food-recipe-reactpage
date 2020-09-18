import styled, { css } from "styled-components";
export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 425px) {
    width: 100%;
    display: block;
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
export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 425px) {
    display: block;
    margin: 10px;
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
export const ProductCard = styled.div`
  display: flex;
  @media (max-width: 425px) {
    display: block;
  }
`;
export const ProductImg = styled.img`
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const ProductContent = styled.div`
  margin: 0 10px;
  padding-left: 20px;
`;
export const Name = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  color: #606060;
  margin: 0;
`;
export const Price = styled.div`
  color: #888;
  font-weight: 500;
  padding-bottom: 20px;
  font-size: 22px;
  border-bottom: 1px solid #ebebeb;
`;
export const Description = styled.div`
  border-bottom: 1px solid #ebebeb;
  padding: 20px 0;
  line-height: 24px;
  color: #808080;
  font-size: 14px;
`;
export const CartIcon = styled.div`
  padding: 20px 0;
  display: flex;
  @media (max-width: 425px) {
    display: block;
  }
`;
export const QuantityChanger = styled.div``;
export const ChangeButton = styled.button`
  background: #c0c0c0;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 24px;
  outline: 0;
  &:hover {
    background-color: #8dc63f;
  }
`;
export const Number = styled.input`
  background-color: #f8f8f8;
  padding: 8px 9px;
  color: #909090;
  outline: none;
  font-size: 20px;
  font-family: inherit;
  border: 1px solid #e8e8e8;
  width: 25px;
  height: 22px;
  text-align: center;
`;
export const Add = styled.div`
  display: flex;
  margin-left: 25px;
  @media (max-width: 425px) {
    margin-left: 0;
    margin-top: 15px;
  }
`;
export const Icon = styled.button`
  color: #fff;
  border: none;
  outline: 0;
  width: 40px;
  cursor: pointer;
  height: 40px;
  background-color: ${({ theme }) => theme.color};
`;
export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.color};
  cursor: pointer;
  height: 40px;
  padding: 7px 14px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  font-family: inherit;
  outline: none;
  color: #fff;
  border: 0;
  &:hover {
    background-color: #808080;
  }
`;
