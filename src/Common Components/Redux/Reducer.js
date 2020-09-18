import { receive_Api, receive_Recipe_Api } from "./Action";
const initialState = {
  count: 0,
  data: [],
  Recipes: [],
  loading: true,
  ShopProducts: [],
};
export function Reducer(state = initialState, action) {
  switch (action.type) {

    // case "count_increment":
    //   return {
    //     count: state.count + 1,
    //   };
    // case "count_decrement":
    //   return {
    //     count: state.count - 1,
    //   };

    case receive_Api: {
      console.log(Object.values(action.data.RecipeList));
      return {
        ...state,
        loading: false,
        data: action.data.Users,
        Recipe: Object.values(action.data.RecipeList),
        ShopProducts: Object.values(action.data.ShoppingCards),
      };
    }
    // case receive_Recipe_Api: {
    //   console.log(action.Recipes);
    //   return {
    //     ...state,
    //     Recipes: action.Recipes,
    //   };
    // }
    default:
      return state;
  }
}
