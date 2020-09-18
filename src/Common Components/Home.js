import React, { useState, useEffect } from "react";
import { Container, LeftWrapper, RightWrapper, Loader } from "./Style";
import { ClassicSpinner } from "react-spinners-kit";
import RecipeCards from "./HomePage/RecipeCards/RecipeCards";
import SideBar from "./HomePage/SideBar/SideBar";
import Banner from "./BannerComponent/Banner";
import Header from "./CommonSection/Header";
import Footer from "./CommonSection/Footer";
import RecipeList from "./HomePage/RecipeList/RecipeList";
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
} from "./Themes/Themes";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { requestApi } from "./Redux/Action";
const mapStateToProps = (state) => {
  return {
    Recipe: state.Recipe || [],
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApi }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
export function Home(props) {
  const [Latestrecipelist, setLatestrecipelist] = useState([]);
  const [Cards, setCards] = useState([]);
  const [Errors, setErrors] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const Recipe = useSelector((state) => state.Recipe);
  const [noitem,setNoitem]=useState(false)

  //Fetching Data from database
  useEffect(() => {
    console.log();
    dispatch(requestApi());
    fetchdata();
  }, [props.Recipe]);
  function fetchdata() {
    setLatestrecipelist(props.Recipe);
    setCards(props.Recipe);
    // const res = fetch("https://my-food-recipe.firebaseio.com/.json");
    // res
    //   .then((res) =>
    //     res.json().then((res) => {
    //     const obj = Object.values(res.RecipeList);
    // setLatestrecipelist(Object.values(props.Recipe.RecipeList))
    // setCards(Object.values(props.Recipe.RecipeList))
    // })
    // )
    // .catch((err) => setErrors(err));
    const timer = setTimeout(() => {
      setLoading(props.loading);
    }, 3000);
    return () => clearTimeout(timer);
  }

  //Search function
  const [searchItems, setSearchItems] = useState([]);
  function onChangeHandler(value) {
    setNoitem(false)
    if (value.length != 0) {
      const filteredlist = Latestrecipelist.filter(
        (data) =>
          value === "" || data.name.toLowerCase().includes(value.toLowerCase())
      );
      if (filteredlist.length != 0) setSearchItems(filteredlist);
      else {
        setNoitem(true)
        setSearchItems([]);
      }
    } else {
      setSearchItems([]);
    }
  }
  // useEffect(() => {
  //   console.log('find')
  //   const filteredlist = Latestrecipelist.filter(
  //     (data) =>
  //       searchTerm === "" ||
  //       data.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   console.log(filteredlist)
  //   setLatestrecipelist(filteredlist);
  // }, [searchTerm]);

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

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Loader>
          <ClassicSpinner size={30} color="#686769" loading={loading} />
        </Loader>
      ) : (
        <div>
          <Header
            Latestrecipelist={Latestrecipelist}
            selectTheme={selectTheme}
            Themes={Themes}
          />
          <Banner recipeList={Latestrecipelist} />
          <Container>
            <LeftWrapper>
              {!noitem ?
              window.location.pathname != "/List" ? (
                <RecipeCards
                  Latestrecipelist={
                    searchItems.length != 0 ? searchItems : Latestrecipelist
                  }
                />
              ) : (
                <RecipeList
                  Latestrecipelist={
                    searchItems.length != 0 ? searchItems : Latestrecipelist
                  }
                />
              ) : <div>No such items...<a href="/shop">Back to Shop</a></div>}
            </LeftWrapper>
            <RightWrapper>
              <SideBar
                onChangeHandler={onChangeHandler}
                Latestrecipelist={Latestrecipelist}
              />
            </RightWrapper>
          </Container>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}
