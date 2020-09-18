import React, { useState} from "react";
import { FaStar, FaRegClock } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import {
  Li,
  Button,
  ViewRecipeButton,
  LatestReciepeHeading,
  Img,
  RecipeCard,
  Cards,
  RecipeImg,
  RecipeContent,
  RecipeName,
  Time,
  Rating,
} from "./RecipeCardscss";
export default function RecipeCards(props) {
  const [isShown, setIsShown] = useState(false);
  const history = useHistory();
  return (
    <div>
      <LatestReciepeHeading>Latest Recipes</LatestReciepeHeading>
      {props.Latestrecipelist.length!=0 ?
      <Cards>
        {props.Latestrecipelist.map((element,index) => (
          <RecipeCard>
            <Img
              onMouseEnter={() => setIsShown(index)}
              onMouseLeave={() => setIsShown(false)}
            >
              <RecipeImg
                src={require(`../../Asserts/${element.image}.jpg`)}
                alt="RecipeImage"
              />
              <Button>
                <a >
                <ViewRecipeButton hover={isShown === index} onClick={()=>history.push('/recipes',{data:element})}>
                  view recipe
                </ViewRecipeButton>
                </a>
              </Button>
            </Img>
            <RecipeContent>
              <RecipeName>{element.name}</RecipeName>
              <div>
                <Rating>
                  {[...Array(5)].map((value, key) => (
                    <FaStar
                      color={key < element.rating ? "#ffc741" : "#e0e0e0"}
                    />
                  ))}
                </Rating>
                <Time>
                  <FaRegClock />
                  <Li>{element.min}</Li>
                </Time>
              </div>
            </RecipeContent>
          </RecipeCard>
        ))}
      </Cards>:
      <Cards>No Such Items...<a href="/home">Back to HomePage</a></Cards>}
    </div>
  );
}
