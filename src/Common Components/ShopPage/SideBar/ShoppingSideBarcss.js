import styled, { css } from "styled-components";
export const InputBox = styled.div`
  margin: 0 0 35px 0;
  display: flex;
`;
export const InputTag = styled.input`
  font-size: 13px;
  width: inherit;
  padding: 12px 15px 12px 15px;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  font-weight: 600;
  font-family: inherit;
  outline: none;
`;
export const Heading = styled.h4`
  font-size: 20px;
  line-height: 30px;
  color: #606060;
  font-weight: 500;
`;
export const SearchIcon = styled.button`
  background-color: ${({ theme }) => theme.color};
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const CartList = styled.div`
  margin-right: 20px;
`;
export const List = styled.div`
  background-color: #f8f8f8;
  color: #606060;
  padding: 16px 20px;
  font-size: 14px;
  font-weight: 600;
`;
export const Cart = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 15px 0 15px 0;
`;
export const CartItemlist = styled.div`
  display: flex;
`;
export const Img = styled.img`
  width: 70px;
  cursor: pointer;
`;
export const ItemDetails = styled.div`
  margin-left: 10px;
`;
export const Price = styled.div`
  color: #888;
  font-family: inherit;
  font-size: 14px;
`;
export const Name = styled.div`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color};
  }
`;
export const RangeDivision = styled.div`
  position: relative;
  padding-bottom: 20px;
`;
export const Input = styled.input`
  position: absolute;
  z-index: 2;
  height: 10px;
  -webkit-appearance: none;
  pointer-events: none;
  cursor: pointer;
  opacity: 0;
  width: 100%;
  &::-webkit-slider-thumb {
    height: 30px;
    width: 30px;
    pointer-events: all;
    -webkit-appearance: none;
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }
`;
export const Range = styled.div`
  position: absolute;
  z-index: 2;
  left: ${(props) => props.RangeLeft};
  top: 0;
  right: ${(props) => props.RangeRight};
  bottom: 0;
  border-radius: 5px;
  background: #f0f0f0;
`;
export const Slider = styled.div`
  position: relative;
  z-index: 1;
  height: 10px;
  margin: 0 10px;
`;
export const Thumb = styled.div`
  position: absolute;
  z-index: 3;
  top: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #555;
  opacity: 0.5;
`;
export const Thumbleft = styled(Thumb)`
  left: ${(props) => props.thumbLeft};
  transform: translate(-15px, -10px);
  cursor: pointer;
`;
export const Thumbright = styled(Thumb)`
  right: ${(props) => props.thumbRight};
  cursor: pointer;
  transform: translate(15px, -10px);
`;
export const Track = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #d4d4d4;
`;
export const Button = styled.button`
  padding: 8px 13px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;
  background-color: ${({ theme }) => theme.color};
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
`;
export const FilterButton = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CartViewButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  background-color: #a0a0a0;
  cursor: pointer;
  &:hover {
    background-color: #808080;
  }
`;
export const CheckOutButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #808080;
  }
`;
