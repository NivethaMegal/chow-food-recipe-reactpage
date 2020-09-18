import React, { Component, createContext } from "react";
import base from "./Firebase";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useHistory,
  Switch,
} from "react-router-dom";
import Login from "./UserDetails/Login";
import Signup from "./UserDetails/Signup";
import Home from "./Home";
import Shoppingpage from "./ShopPage/ShoppingWrapper/Shoppingpage";
import RecipeDetails from "./RecipePage/RecipeDetails/RecipeDetails";
import SubmitRecipe from "./SubmitPage/SubmitRecipe";
import Profile from "./My Profile/Profile";
import Product from "./ProductPage/Product";
export const UserContext = createContext({ user: null });
export default class UserPage extends Component {
  state = {
    user: {},
    authuser:{},
    sessioncount:''
  };
  componentDidMount() {
    this.authentication();
  }
  authentication(){
    base.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authuser:user})
        console.log(base.auth().currentUser.email);
        const res = fetch("https://my-food-recipe.firebaseio.com/.json");
        res.then((res) =>
          res.json().then((res) => {
            const obj = Object.values(res.Users);
            if (obj != null) {
              obj.forEach((element) => {
                if (element.email == base.auth().currentUser.email){
                  console.log(element)
                  this.setState({ user: element });
                  console.log(this.state.user)
                }
              });
            }
          })
        );
      } else {
        this.setState({authuser: null });
      }
    });
  }
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/" component={Signup}></Route>
            {this.state.authuser!= null && sessionStorage.user!=null ? (
              <Switch>
                <Route
                  exact
                  path={["/home", "/Grid", "/List"]}
                  component={Home}
                ></Route>
                <Route exact path="/shop" component={Shoppingpage}></Route>
                <Route exact path="/recipes" component={RecipeDetails}></Route>
                <Route
                  exact
                  path="/recipe-page"
                  component={RecipeDetails}
                ></Route>
                <Route exact path="/product-page" component={Product}></Route>
                <Route exact path="/myprofile" component={Profile}></Route>
                <Route
                  exact
                  path="/submit-recipe"
                  component={SubmitRecipe}
                ></Route>
              </Switch>)
               : (
             <Redirect to="/login" />
          )}
          </Switch>
        </Router>
      </UserContext.Provider>
    );
  }
}

// const [state,setState]=useState(false);
// useEffect(() => {
//   base.auth().onAuthStateChanged((user) => {
//     if(user) {
//       console.log(user);
//       console.log(state);
//       setState({user:user});
//       console.log(state)
//     }
//   });
// },[])
