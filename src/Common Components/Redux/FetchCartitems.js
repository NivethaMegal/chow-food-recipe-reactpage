export const FetchCartitems = async () => {
  const res = await fetch("https://my-food-recipe.firebaseio.com/.json");
  return res.json();
};

// export const FetchRecipeItems = () => {
//   const res = await fetch("https://my-food-recipe.firebaseio.com/.json");
//   return res.json()
// console.log('aa')
// const res = fetch("https://my-food-recipe.firebaseio.com/.json");
// console.log(res)
// res.then((res) =>
//   res.json()).then((res) => {
//     const obj = Object.values(res.RecipeList);
//     console.log(obj)
//     return obj;
//   });
// res
//   .then((res1) =>
//     res.json().then((res) => {
//     const obj = Object.values(res.RecipeList);
//     return obj;
//   })
//   )
//   .catch((e) => console.log(e));
// };
