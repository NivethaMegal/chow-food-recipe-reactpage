import React, { useState } from "react";
import {
  Heading,
  Item,
  ItemNumber,
  DirectionsDetails,
  DirectionsList,
} from "./RecipeDetailscss";
export default function Directions() {
  const [Directions] = useState([
    "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
    "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
    "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
    "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
  ]);
  return (
    <DirectionsDetails>
      <Heading>Directions</Heading>
      {Directions.map((element, index) => (
        <DirectionsList>
          <ItemNumber>{index + 1}</ItemNumber> <Item>{element}</Item>
        </DirectionsList>
      ))}
    </DirectionsDetails>
  );
}
