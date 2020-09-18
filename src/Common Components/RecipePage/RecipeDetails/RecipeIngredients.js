import React, { useState } from "react";
import {
  Heading,
  IngredientList,
  CheckBox,
  CheckBoxHighLighter,
  List,
  Listspan,
} from "./RecipeDetailscss";
export default function RecipeIngredients() {
  const [IngredientsList, setIngredientsList] = useState([
    { list: "2 pounds cubed beef stew meat", checked: false },
    { list: "4 cubes beef bouillon, crumbled", checked: false },
    { list: "1 large onion, chopped", checked: false },
    { list: "2 teaspoon dried rosemary", checked: false },
    { list: "2 teaspoon ground black pepper", checked: false },
    { list: "1 large potatoes, peeled and cubed", checked: false },
    { list: "2 carrots, cut into 1 inch pieces", checked: false },
    { list: "2 pounds cubed beef stew meat", checked: false },
    { list: "2 stalks celery, cut into 1 inch pieces", checked: false },
  ]);
  function toggling(name) {
    let tempList = [...IngredientsList];
    tempList.map((element, index) => {
      if (element.list == name) {
        element.checked = !element.checked;
      }
    });
    setIngredientsList(tempList);
  }
  return (
    <div>
      <Heading>Ingredients</Heading>
      <IngredientList>
        {IngredientsList.map((element, index) => (
          <List>
            <CheckBox type="checkbox" onClick={() => toggling(element.list)} />
            {"  "}
            <CheckBoxHighLighter></CheckBoxHighLighter>
            <Listspan checked={element.checked}>{element.list}</Listspan>
          </List>
        ))}
      </IngredientList>
    </div>
  );
}
