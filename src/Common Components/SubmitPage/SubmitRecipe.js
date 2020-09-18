import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import {
  Container,
  Title,
  PageBar,
  PageName,
  PageDenote,
  HomeTag,
} from "../ShopPage/ShoppingWrapper/Shoppingpagecss";
import {
  Label,
  InputElement,
  InputTag,
  SubmitButton,
  RecipeForm,
  Textarea,
} from "./SubmitRecipecss";
import Header from "../CommonSection/Header.js";
import base from "../Firebase";
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
} from "../Themes/Themes.js";
import Footer from "../CommonSection/Footer";
export default function SubmitRecipe() {
  const [theme, setTheme] = useState(Theme1);
  const [Themes] = useState([
    {
      color: Theme1,
      id: 0,
    },
    {
      color: Theme2,
      id: 1,
    },
    {
      color: Theme3,
      id: 2,
    },
    {
      color: Theme4,
      id: 3,
    },
    {
      color: Theme5,
      id: 4,
    },
    {
      color: Theme6,
      id: 5,
    },
    {
      color: Theme7,
      id: 6,
    },
    {
      color: Theme8,
      id: 7,
    },
    {
      color: Theme9,
      id: 8,
    },
    {
      color: Theme10,
      id: 9,
    },
    {
      color: Theme11,
      id: 10,
    },
    {
      color: Theme12,
      id: 11,
    },
    {
      color: Theme13,
      id: 12,
    },
    {
      color: Theme14,
      id: 13,
    },
    {
      color: Theme15,
      id: 14,
    },
    {
      color: Theme16,
      id: 15,
    },
  ]);
  const selectTheme = (id) => {
    Themes.map((element, index) => {
      if (element.id == id) {
        console.log(element);
        setTheme(element.color);
      }
    });
  };
  const [submitted,setSubmitted]=useState(false);
  const [Error,setError]=useState();
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [cooking, setCooking] = useState("");
  const [tag, setTag] = useState("");
  const [servings, setServings] = useState("");
  const [calories, setCalories] = useState("");
  const [chef, setChef] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  //submitting the recipe in database
  const submitRecipe = (e) => {
    e.preventDefault();
    if(name.length!=0 && rating.length!=0 && time.length!=0 && chef.length!=0 && tag.length!=0 && cooking.length!=0 && servings.length!=0 && calories.length!=0 && description.length!=0){
    let ref=base.database().ref("/RecipeList").push();
    let key=ref.key;
    const Ref = base.database().ref("/RecipeList").push({
      index: key,
      name: name,
      rating: rating,
      min: time,
      image: "recipeThumb-02",
      chef: chef,
      tag: tag,
      cooking: cooking,
      bannerimage: "sliderA_02",
      servings: servings,
      calories: calories,
      description: description,
    }).then(setSubmitted(true)).catch(setError(true)).catch(error=>setError(error));
  }
  else{
    setError("No fields should be empty...");
  }
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Header selectTheme={selectTheme} Themes={Themes} data-test='theme'/>
      <PageBar>
        <Container>
          <Title>
            <PageName>Submit Recipe</PageName>
            <PageDenote>
              You are here: <HomeTag>Home</HomeTag> <FaChevronRight />
              Submit Recipe
            </PageDenote>
          </Title>
        </Container>
      </PageBar>
      <Container>
        <RecipeForm>
          <InputElement>
            <Label>Recipe Name</Label>
            <InputTag type="text" onChange={(e) => setName(e.target.value)} data-test='name'/>
          </InputElement>
          <InputElement>
            <Label>Preparation Time</Label>
            <InputTag type="text" onChange={(e) => setTime(e.target.value)} data-test='preparation-time'/>
          </InputElement>
          <InputElement>
            <Label>Cooking Time</Label>
            <InputTag
              type="text"
              onChange={(e) => setCooking(e.target.value)}
              data-test='cooking-time'
            />
          </InputElement>
          <InputElement>
            <Label>Recipe Category</Label>
            <InputTag type="text" onChange={(e) => setTag(e.target.value)} data-test='category'/>
          </InputElement>
          <InputElement>
            <Label>Servings</Label>
            <InputTag
              type="number"
              data-test='servings'
              onChange={(e) => setServings(e.target.value)}
            />
          </InputElement>
          <InputElement>
            <Label>Calories</Label>
            <InputTag
              type="text"
              data-test='calories'
              onChange={(e) => setCalories(e.target.value)}
            />
          </InputElement>
          <InputElement>
            <Label>Chef</Label>
            <InputTag type="text" onChange={(e) => setChef(e.target.value)} data-test='chef' />
          </InputElement>
          <InputElement>
            <Label>Ratings</Label>
            <InputTag
              type="number"
              onChange={(e) => setRating(e.target.value)}
              data-test='ratings'
            />
          </InputElement>
          <InputElement>
            <Label>Description</Label>
            <Textarea
              rows="5"
              cols="50"
              onChange={(e) => setDescription(e.target.value)}
              data-test='description'
            ></Textarea>
          </InputElement>
          <SubmitButton onClick={(e) => submitRecipe(e)} data-test='submit'>
            Submit Recipe
          </SubmitButton>
          {submitted && 
          <div>Your Recipe is Submitted Successfully...<a href="/home">Back to HomePage</a></div>
          }
          <div>{Error}</div>
        </RecipeForm>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}
