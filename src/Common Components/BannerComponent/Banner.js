import React, { useState } from "react";
import { FaRegClock, FaUserAlt, FaUtensils } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import {
  BannerLinks,
  BannerList,
  BannerListButton,
  BannerDiv,
  Img,
  Container,
  Li,
  BannerContent,
  BannerHead,
  BannerHeadTitle,
  BannerDetails,
  ViewRecipe,
  BakingTag,
  A,
} from "./Bannercss";
export default function Banner(props) {
  const history = useHistory();
  const [recipeName] = useState([
    "Mexican Grilled Corn Recipe",
    "Roast Chicken with Lemon Gravy",
    "Avocado Melon Salad With Lime Vinaigrette",
    "Chunky Beef Stew",
  ]);
  const [banner, setBanner] = useState({
    index: 0,
    name: "Mexican Grilled Corn Recipe",
    min: "30 min",
    rating: 5,
    tag: "baking",
    image: "recipeThumb-01",
    chef: "Sandra Fortin",
    cooking: "2 hours",
    calories: "632 kcal",
    servings: "4",
    bannerimage: "sliderA_01",
    description:
      "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
  },);
  //Selecting Banner
  const bannerSelect=(key)=>{
    props.recipeList.forEach(element => {
        if(element.name==key){
          console.log(element)
        setBanner(element);
        }
    });
  }
  return (
    <div>
      <BannerDiv>
        <Img src={require(`../Asserts/${banner.bannerimage}.jpg`)} alt="Banner" />
        <Container>
          <BannerContent>
            <BakingTag>{banner.tag}</BakingTag>
            <BannerHeadTitle>
              <BannerHead onClick={()=>history.push('/recipes',{data:banner})}>
                <A>{banner.name}</A>
              </BannerHead>
            </BannerHeadTitle>
            <BannerDetails>
              <FaUtensils />
              <Li>{banner.servings} Servings</Li>
              <FaRegClock />
              <Li>{banner.min}</Li>
              <FaUserAlt />
              <Li>BY {banner.chef}</Li>
            </BannerDetails>
            <ViewRecipe onClick={()=>history.push('/recipes',{data:banner})}>View Recipe</ViewRecipe>
          </BannerContent>
        </Container>
      </BannerDiv>  
      <Container>
        <BannerList>
          {recipeName.map((ele, index) => (
            <BannerListButton onClick={()=>bannerSelect(ele)} index={banner.name===ele}>{ele}
            </BannerListButton>
          ))}
        </BannerList>
      </Container>
    </div>
  );
}
