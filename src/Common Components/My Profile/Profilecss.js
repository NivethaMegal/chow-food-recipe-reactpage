import styled, { css } from "styled-components";
export const PageBar = styled.div`
  background-color: #f6f6f6;
  min-height: 88px;
  margin: 0 0 40px 0;
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
export const Loader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: absolute;
`;
export const Label = styled.h4`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 30px;
  color: #606060;
  font-weight: 500;
`;
export const InputElement = styled.div`
  width: 100%;
`;
export const RecipeForm = styled.form`
width:100%;
 @media (max-width: 425px) {
    margin:10px;
  }
`;
export const Card = styled.div`
  width: 213px;
  margin: 20px 20px 0 0;
  @media (max-width: 425px) {
    width:100%;
  }

`;
export const ProductImg = styled.div`
  position: relative;
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
export const InputTag = styled.input`
  font-weight: 600;
  width: 100%;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #777;
  padding: 14px 15px 12px 15px;
  line-height: 24px;
  outline: none;
  background-color: #fff;
`;
export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.color};
  padding: 10px 18px;
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  outline: none;
  color: #fff;
  margin: 30px 0;
  border: none;
  &:hover {
    background-color: #808080;
  }
`;
export const Container=styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 425px) {
    width: 100%;
  }`;