import React, { useState } from "react";
import { FaStar, FaRegClock, FaUserAlt,FaUtensils } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import {
  LatestReciepeHeading,
  RecipeBox,
  RecipeImg,
  Description,
  Img,
  Title,
  Content,
  Ratings,
  Time,
  Li,
  Servings,
  Button,
  ViewRecipeButton,
  RecipeDetails
} from "./RecipeListcss";
export default function RecipeList(props) {
  const [isShown, setIsShown] = useState(false);
  const history = useHistory();
  return (
    <div>
      <LatestReciepeHeading>Latest Recipes</LatestReciepeHeading>
      <div>
        {props.Latestrecipelist.map((element, index) => (
          <RecipeBox>
            <RecipeImg onMouseEnter={() => setIsShown(index)}
              onMouseLeave={() => setIsShown(false)}>
              <Img src={require(`../../Asserts/${element.image}.jpg`)}/>
              <Button>
                <ViewRecipeButton hover={isShown === index} onClick={()=>history.push('/recipes',{data:element})}>
                  view recipe
                </ViewRecipeButton>
              </Button>
            </RecipeImg>
            <Description>
              <Title>{element.name}</Title>
              <Content>{element.description}</Content>
              <Ratings>
                <div>
                  {[...Array(5)].map((value, key) => (
                    <FaStar
                      color={key < element.rating ? "#ffc741" : "#e0e0e0"}
                    />
                  ))}
                  </div>
                <RecipeDetails>
                <Time>
                <Li>
                  <FaRegClock />
                  {element.min}
                </Li>
                <Li>
                  <FaUserAlt />
                  {element.chef}
                </Li>
                </Time>
                <Servings>
                <Li><FaUtensils/>{element.servings} servings</Li>
                </Servings>
                </RecipeDetails>
              </Ratings>
            </Description>
          </RecipeBox>
        ))}
      </div>  
    </div>
  );
}
