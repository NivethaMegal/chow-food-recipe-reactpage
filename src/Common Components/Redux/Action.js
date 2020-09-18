// export function fetchProductsSuccess() {
//     return {
//         type: 'getcartitems',
//     }
// // }
// export const LOAD_USERS_LOADING = "REDUX_SAGA_LOAD_USERS_LOADING";
// export const LOAD_USERS_SUCCESS = "REDUX_SAGA_LOAD_USERS_SUCCESS";
// export const LOAD_USERS_ERROR = "REDUX_SAGA_LOAD_USERS_ERROR";

// export const loadUsers = (index) => (dispatch) => {
//   console.log("jj");
//   dispatch({ type: LOAD_USERS_LOADING, payload: {id:index} });
// };

export const request_Api = "Request_api";
export const receive_Api = "Receive_api";

export const request_Recipe_Api = "Request_Recipe_api";
export const receive_Recipe_Api = "Receive_Recipe_api";

export const requestApi = () => ({ type: "Request_api" });
export const receiveApi = (data) => ({ type: "Receive_api", data });

export const requestRecipeApi = () => ({ type: "Request_Recipe_api" });
export const receiveRecipeApi = (Recipes) => ({
  type: "Receive_Recipe_api",
  Recipes,
});
