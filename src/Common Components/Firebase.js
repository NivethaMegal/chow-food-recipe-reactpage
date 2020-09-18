import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBBTcBYXnaAmM1YEg6QLpggdBscZJXVJfk",
  authDomain: "my-food-recipe.firebaseapp.com",
  databaseURL: "https://my-food-recipe.firebaseio.com",
  projectId: "my-food-recipe",
  storageBucket: "my-food-recipe.appspot.com",
  messagingSenderId: "114221211721",
  appId: "1:114221211721:web:ff4ee9d874a6f51cc81f98",
  measurementId: "G-TJ8VFKQ9ZM",
};
const base = firebase.initializeApp(firebaseConfig);
export default base;
