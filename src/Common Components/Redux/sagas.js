import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import {
  requestApi,
  receiveApi,
  requestRecipeApi,
  receiveRecipeApi,
} from "./Action";
import { FetchCartitems, FetchRecipeItems } from "./FetchCartitems";

//Worker
export function* fetchUser(action) {
  try {
    const data = yield call(FetchCartitems);
    console.log(data);
    yield put(receiveApi(data));
  } catch (e) {
    console.log(e);
  }
}

//Watcher
export function* usersSaga() {
  // Allows concurrent fetches of users
  // yield takeEvery(requestApi, fetchUser);

  // Does not allow concurrent fetches of users
  yield takeLatest(requestApi, fetchUser);
}
function* Saga() {
  yield all([fork(usersSaga)]);
}
export default Saga;







// function* countIncrement(action){
//   yield put({type:"count_increment"});
// }

// function* countDecrement(action){
//   yield put({type:"count_decrement"});
// }

// function* fetchRecipe(action) {
//   try {
//     const data =yield call(FetchCartitems);
//     console.log(data)
//     yield put(receiveRecipeApi(data))
//   } catch (e) {
//     console.log(e);
//   }
// }
// function* usersSaga1() {
//   yield takeLatest(requestRecipeApi, fetchRecipe);
// Allows concurrent fetches of users
// yield takeEvery(requestApi, fetchUser);

// Does not allow concurrent fetches of users
// yield takeLatest(requestApi, fetchUser);
// yield takeLatest("increment", countIncrement);
// yield takeLatest("decrement", countDecrement);
// }

// function* usersSaga2() {
// Allows concurrent fetches of users
// yield takeEvery(requestApi, fetchUser);

// Does not allow concurrent fetches of users
// yield takeLatest(requestApi, fetchUser);
// yield takeLatest("increment", countIncrement);
// yield takeLatest("decrement", countDecrement);
// }
