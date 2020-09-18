import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaStar, FaShare } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import {
  Img,
  SideBarDiv,
  InputBox,
  InputTag,
  AuthorDescription,
  PopularRecipeData,
  RecipeName,
  RecipeRating,
  Heading,
  SearchIcon,
  AuthorContent,
  AuthorTag,
  RecipeImg,
  Name,
  AuthorPhoto,
  AuthorEmail,
  Icon
} from "./SideBarcss";
export default function SideBar(props){
  const history = useHistory();

  //filtering popular recipes
  const calpopularrecipelist=()=>{
    let popularList=[];
    props.Latestrecipelist.forEach((element,index)=>{
      if(element.rating==5){
        popularList.push(element);
      }
    })
    return popularList;
  }
  
  const [isShown,setIsShown]=useState(false);
  return (
    <SideBarDiv>
      <InputBox>
        <InputTag type="text" placeholder="Search for recipes" onChange={(e)=>props.onChangeHandler(e.target.value)}/>
        <SearchIcon>
          <BsSearch />
        </SearchIcon>
      </InputBox>
      <AuthorContent>
        <AuthorTag>author</AuthorTag>
        <Name>
          Sandra <br></br>
          Fortin
        </Name>
        <AuthorPhoto>
          <Img src={require(`../../Asserts/author-photo.png`)} alt="Author" />
        </AuthorPhoto>
        <AuthorEmail href="#">sandra@chow.com</AuthorEmail>
        <AuthorDescription>
          I'm Sandra and this is where I share my stuff. I am madly in love with
          food. You will find a balance of healthy recipes, comfort food and
          indulgent desserts.
        </AuthorDescription>
      </AuthorContent>
      <div>
        <Heading>Popular Recipes</Heading>
        {calpopularrecipelist().map((element, index) => (
          <PopularRecipeData onMouseEnter={() => setIsShown(index)}
          onMouseLeave={() => setIsShown(false)}>
            <RecipeImg
              src={require(`../../Asserts/${element.image}.jpg`)}
              alt="PopularRecipe"
              onClick={()=>history.push('/recipes',{data:element})}
            />
            <RecipeRating>
              <RecipeName onClick={()=>history.push('/recipes',{data:element})}>{element.name}</RecipeName>
              {[...Array(5)].map((value, key) => (
                <FaStar color={key < element.rating ? "#ffc741" : "#e0e0e0"} />
              ))}
            </RecipeRating>
            <Icon hover={isShown === index} onClick={()=>history.push('/recipes',{data:element})}><FaShare/></Icon>
          </PopularRecipeData>
        ))}
      </div>
    </SideBarDiv>
  );
}
