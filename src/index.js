import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware,createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {Reducer} from "../src/Common Components/Redux/Reducer";
import Saga from "./Common Components/Redux/sagas.js";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore
     (Reducer,applyMiddleware(...middleware));
 sagaMiddleware.run(Saga);
 ReactDOM.render( <Provider store={store}>
   <div style={{overflow:'hidden'}}>
  <App />
  </div>
</Provider>, document.getElementById('root'));
// const middlewares = [thunk];
// const reducer = combineReducers({state: Reducer});
// const store = createStore(Reducer, applyMiddleware(...middlewares)) 


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
  
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
