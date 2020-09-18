import styled, { css } from "styled-components";
export const LatestReciepeHeading = styled.h3`
  font-size: 22px;
  color: #606060;
  font-weight: 500;
  @media (max-width: 425px) {
    margin: 20px;
  }
`;
export const RecipeBox = styled.div`
  margin: 0 20px 20px 0;
  color: #808080;
  font-size: 14px;
  display: flex;
  @media (max-width: 425px) {
    margin: 20px;
    display: block;
  }
`;
export const RecipeImg = styled.div`
  width: 235px;
  position: relative;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const Description = styled.div`
  background-color: #f8f8f8;
  padding: 33px 35px 29px 35px;
`;
export const Img = styled.img`
  height: 100%;
  width: 235px;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #333;
    opacity: 0.8;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const Title = styled.h3`
  font-size: 22px;
  line-height: 26px;
  margin: 0;
  padding: 0 0 13px 0;
  cursor: pointer;
`;
export const Content = styled.p`
  border-bottom: 1px solid #e5e5e5;
  margin: 0 0 15px 0;
  padding: 0 0 22px 0;
  line-height: 24px;
`;
export const Ratings = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
export const RecipeDetails = styled.div``;
export const Time = styled.div`
  display: flex;
  @media (max-width: 425px) {
    display: block;
  }
`;
export const Li = styled.li`
  text-transform: uppercase;
  list-style: none;
  font-size: 13px;
  padding-left: 20px;
  @media (max-width: 425px) {
    padding: 0;
    margin-bottom: 5px;
  }
`;
export const Servings = styled.div`
  float: right;
  margin-top: 10px;
  @media (max-width: 425px) {
    float: none;
    margin-top: 0;
  }
`;
export const Button = styled.div`
  position: absolute;
  top: 45%;
  left: 25%;
  @media (max-width: 425px) {
    left:32%;
  }
`;
export const ViewRecipeButton = styled.button`
  background-color: rgba(51, 51, 51, 0.8);
  color: #fff;
  padding: 8px 12px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  border: none;
  outline: 0;
  font-family: inherit;
  visibility: ${(props) => (props.hover ? "visible" : "hidden")};
`;
