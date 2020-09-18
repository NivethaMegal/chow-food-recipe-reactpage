import styled, { css } from "styled-components";
export const LatestReciepeHeading = styled.h3`
  font-size: 22px;
  color: #606060;
  font-weight: 500;
  @media (max-width: 425px) {
    margin:20px
  }
`;
export const RecipeCard = styled.div`
  width: 213px;
  margin: 0 20px 20px 0;
  @media (max-width: 425px) {
    width:100%;
    margin:20px;
  }
`;
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const RecipeImg = styled.img`
  width: inherit;
  position: relative;
  cursor:pointer;
  &:hover {
    background-color: #333;
    opacity: 0.8;
  }
`;
export const Img = styled.div`
  width: inherit;
  position: relative;
`;
export const RecipeContent = styled.div`
  background-color: #f8f8f8;
  padding: 20px 25px;
  margin: -5px 0 0 0;
`;
export const RecipeName = styled.h3`
  color: #606060;
  font-weight: 500;
  font-size: 19px;
  cursor:pointer;
  line-height: 24px;
  font-family: "Arvo";
  border-bottom: 1px solid #e5e5e5;
  margin: 0 0 10px 0;
  padding: 0 0 15px 0;
`;
export const Time = styled.div`
  color: #909090;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-end;
  margin-left: 15px;
`;
export const Rating = styled.div``;
export const Button = styled.div`
  position: absolute;
  top: 45%;
  left: 25%;
`;
export const ViewRecipeButton = styled.button`
  background-color: rgba(51, 51, 51, 0.8);
  color: #fff;
  padding: 8px 12px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  cursor:pointer;
  border: none;
  outline: none;
  font-family: inherit;
  visibility: ${(props) => (props.hover ? "visible" : "hidden")};
`;
export const Li = styled.li`
  padding-left: 5px;
  list-style: none;
`;
