import styled, { css } from "styled-components";
export const SideBarDiv = styled.div`
@media (max-width: 425px) {
    margin:20px;
  }`;
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
export const Share = styled.div``;
export const AuthorDescription = styled.p`
  margin: 10px 0 0 0;
  line-height: 24px;
  color: #808080;
  font-family: inherit;
`;
export const Img = styled.img`
  border-radius: 50%;
  position: relative;
  bottom: 70px;
  left: 125px;
  height: 64px;
  width: 64px;
`;
export const PopularRecipeData = styled.div`
  height: 100px;
  width: 240px;
  position: relative;
  margin: 5px 0;
  @media (max-width: 425px) {
   width:100%;
  }
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
  width: 44px;
  cursor: pointer;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const AuthorContent = styled.div`
  border: 1px solid #e8e8e8;
  padding: 28px 25px;
`;
export const AuthorTag = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
`;
export const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #606060;
`;
export const AuthorPhoto = styled.div`
  height: 0;
`;
export const AuthorEmail = styled.a`
  color: #a0a0a0;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.color};
  }
`;
export const RecipeImg = styled.img`
  height: 100px;
  width: 240px;
  position: relative;
  cursor: pointer;
  opacity: 0.8;
  @media (max-width: 425px) {
   width:100%;
  }
`;
export const RecipeName = styled.h4`
  line-height: 18px;
  font-weight: 700;
  cursor: pointer;
  margin: 0;
`;
export const RecipeRating = styled.div`
  position: absolute;
  top: 20%;
  margin: 0 30px;
  color: #fff;
`;
export const Icon = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height:37px;
  background-color: ${({ theme }) => theme.color};
  right: 0;
  bottom: 0;
  top:0;
  position: absolute;
  visibility: ${props=> props.hover? "visible":"hidden"};
  &:hover{
    background-color: #808080;
    color:#fff;
  }
`;