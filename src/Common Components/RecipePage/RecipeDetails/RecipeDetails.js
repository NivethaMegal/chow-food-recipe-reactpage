import React, { useState,useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Directions from "./Directions";
import RecipeIngredients from "./RecipeIngredients";
import {
  RecipeName,
  RecipeBanner,
  RecipeHeading,
  BannerImg,
  RecipeDetailsList,
  Reviews,
  Details,
  Content,
  ContentList,
  Value,
  Container,
  Img,
  SideBorder,
  LeftWrapper,
  RightWrapper,
  RecipeDescription,
  RecipePage
} from "./RecipeDetailscss";
import { ThemeProvider } from "styled-components";
import {
  Theme1,
  Theme2,
  Theme3,
  Theme4,
  Theme5,
  Theme6,
  Theme7,
  Theme8,
  Theme9,
  Theme10,
  Theme11,
  Theme12,
  Theme13,
  Theme14,
  Theme15,
  Theme16,
} from "../../Themes/Themes";

import Header from "../../CommonSection/Header";
import Footer from "../../CommonSection/Footer";
import SideBar from "../../HomePage/SideBar/SideBar";
export default function RecipeDetails(props) {
  const [DefaultRecipe]=useState({
    index: 3,
    name: "Chunky Beef Stew",
    rating: 5,
    min: "2 hr 30 min",
    image: "recipeThumb-04",
    chef: "Sandra Fortin",
    bannerimage: "sliderA_04",
    cooking: "2 hours",
    servings: "4",
    calories: "632 kcal",
    description:
      "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
  });
 
  const [theme, setTheme] = useState(Theme1);
  const [Themes]=useState([{
    color:Theme1,
    id:0,
},
{
    color:Theme2,
    id:1,
},
{
    color:Theme3,
    id:2,
},
{
    color:Theme4,
    id:3,
},
{
    color:Theme5,
    id:4,
},
{
    color:Theme6,
    id:5,
},
{
    color:Theme7,
    id:6,
},
{
    color:Theme8,
    id:7,
},
{
    color:Theme9,
    id:8,
},
{
    color:Theme10,
    id:9,
},
{
    color:Theme11,
    id:10,
},
{
    color:Theme12,
    id:11,
},
{
    color:Theme13,
    id:12,
},
{
    color:Theme14,
    id:13,
},
{
    color:Theme15,
    id:14,
},
{
    color:Theme16,
    id:15,
},
]);
const [Latestrecipelist,setLatestrecipelist]=useState([]);
const [Errors,setErrors]=useState();

//Fetching data from database
useEffect(() => {
  fetchdata();
}, []);
function fetchdata() {
  const res = fetch("https://my-food-recipe.firebaseio.com/.json");
    res
      .then((res) =>
        res.json().then((res) => {
        const obj = Object.values(res.RecipeList); 
        setLatestrecipelist(obj)}
      )
      .catch((err) => setErrors(err)));
}

//Theme selection
  const selectTheme = (id) => {
    Themes.map((element,index)=>{
      if(element.id==id){
        console.log(element);
        setTheme(element.color);
      }
    })
  };
  const RecipeDetails = window.location.pathname!="/recipes" ? DefaultRecipe : props.location.state.data;
  console.log(RecipeDetails);
  return (
    <ThemeProvider theme={theme}>
      <Header selectTheme={selectTheme} Themes={Themes}/>
      <RecipeBanner> 
        <BannerImg
          src={require(`../../Asserts/${RecipeDetails.bannerimage}.jpg`)}
          alt="Image"
        />
      </RecipeBanner>
      <Container>
        <LeftWrapper>
          <RecipeDetailsList>
            <RecipeHeading>
              <RecipeName>{RecipeDetails.name}</RecipeName>
              <Reviews>
                {[...Array(5)].map((value, key) => (
                  <FaStar
                    color={key < RecipeDetails.rating ? "#ffc741" : "#e0e0e0"}
                  />
                ))}{" "}
                ({RecipeDetails.rating} reviews)
              </Reviews>
              <SideBorder></SideBorder>
            </RecipeHeading>
            <div>
              <Img
                src={require(`../../Asserts/${RecipeDetails.image}.jpg`)}
                alt="Image"
              />
            </div>
            <Details>
              <Content>
                <ContentList>
                  <div>Serves:</div>
                  <Value>{RecipeDetails.servings}</Value>
                </ContentList>
                <ContentList>
                  <div>Prep Time:</div>
                  <Value>{RecipeDetails.min}</Value>
                </ContentList>
                <ContentList>
                  <div>Cooking:</div>
                  <Value>{RecipeDetails.cooking}</Value>
                </ContentList>
                <ContentList>
                  <div>Calories:</div>
                  <Value>{RecipeDetails.calories}</Value>
                </ContentList>
              </Content>
            </Details>
            <RecipeDescription>{RecipeDetails.description}</RecipeDescription>
            <RecipePage alignment={window.location.pathname!="/recipe-page-2"}>
            <RecipeIngredients />
            <Directions />
            </RecipePage>
          </RecipeDetailsList>
        </LeftWrapper>
        <RightWrapper>
          <SideBar
            Latestrecipelist={Latestrecipelist}
          ></SideBar>
        </RightWrapper>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
