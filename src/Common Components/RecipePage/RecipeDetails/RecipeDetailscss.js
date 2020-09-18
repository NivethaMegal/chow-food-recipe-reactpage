import styled, { css } from "styled-components";
export const RecipeName = styled.h2`
  font-size: 30px;
  font-family: "Arvo";
  color: #606060;
  margin: 0;
  font-weight: 500;
  width: 90%;
`;
export const RecipeBanner = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0.8;
  max-height: 250px;
`;
export const SideBorder = styled.div`
  border-style: solid;
  border-color: #e0e0e0 transparent;
  border-width: 0 48px 48px 0;
  width: 1px;
  position: absolute;
  right: 0;
  top: 0;
`;
export const Img = styled.img`
  width: 100%;
  height: 320px;
`;
export const RecipeHeading = styled.div`
  line-height: 30px;
  padding: 35px;
  background-color: #f8f8f8;
`;
export const BannerImg = styled.img`
  width: 100%;
  height: 250px;
`;
export const RecipeDetailsList = styled.div`
  margin-right: 40px;
  position: relative;
  top: -60px;
  @media (max-width: 425px) {
    margin:20px;
  }
`;
export const Reviews = styled.div`
  color: #909090;
  font-size: 14px;
`;
export const Details = styled.div`
  padding: 20px 23px 20px 35px;
  background-color: #f8f8f8;
  margin-top: -5px;
`;
export const Content = styled.div`
  display: flex;
  @media (max-width: 425px) {
    display:block;
  }
`;
export const ContentList = styled.div`
  margin-right: 21px;
  padding-right: 21px;
  border-right: 1px solid #d8d8d8;
  font-size: 14px;
  @media (max-width: 425px) {
    border:0;
    padding:10px;
  }
`;
export const Value = styled.div`
  font-weight: 600;
`;
export const RecipeDescription = styled.p`
  padding: 15px 0;
  margin: 0 0 15px 0;
  line-height: 24px;
  font-size: 14px;
  @media (max-width: 425px) {
    padding: 10px;
  }
`;
export const IngredientList = styled.ul`
  background-color: #fff;
  border: 1px solid #e9e9e9;
  padding: 39px 0;
  position: relative;
  margin: 12px 0 35px 0;
`;
export const Heading = styled.h3`
  font-size: 22px;
  color: #606060;
  font-weight: 500;
  @media (max-width: 425px) {
    padding: 0 10px;
  }
`;
export const DirectionsList = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    padding: 10px;
  }
`;
export const List = styled.div`
  border-bottom: 1px solid #e9e9e9;
  border-top: 1px solid #e9e9e9;
  padding: 10px 0 4px 120px;
  cursor:pointer;
  @media (max-width: 425px) {
    padding: 10px;
  }
`;
export const DirectionsDetails = styled.div`
  font-size: 16px;
`;
export const CheckBox = styled.input``;
export const Item = styled.div`
  padding: 15px 10px;
  line-height: 24px;
`;
export const CheckBoxHighLighter = styled.span`
  height: 20px;
  width: 20px;
  background-color: #fff;
`;
export const ItemNumber = styled.div`
  text-align: center;
  line-height: 32px;
  color: #999;
  font-weight: 700;
  font-size: 16px;
  background-color: #f4f4f4;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;
export const Listspan = styled.span`
  text-decoration: ${(props) =>
    props.checked ? "line-through" : "none"};
`;
export const RecipePage= styled.div`
display: ${props=>props.alignment ? "block": "flex"};
`;
export const Container = styled.div`
  width: 960px;
  margin: 15px auto;
  padding: 0;
  color: #808080;
  font-family: "Open Sans", sans-serif;
  display: flex;
  @media (max-width: 425px) {
    width:100%;
    display:block;
  }
`;
export const LeftWrapper = styled.div`
  width: 75%;
  @media (max-width: 425px) {
    width:100%;
  }
`;
export const RightWrapper = styled.div`
  width: 25%;
  margin: 25px 0;
  @media (max-width: 425px) {
    width:100%;
  }
`;
