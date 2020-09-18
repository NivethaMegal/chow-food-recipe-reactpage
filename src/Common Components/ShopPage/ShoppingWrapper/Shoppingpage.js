import React, { useState, useEffect, useContext } from "react";
import { ClassicSpinner } from "react-spinners-kit";
import { useHistory } from "react-router-dom";
import ShoppingCards from "../ShoppingCards/ShoppingCards";
import ShoppingSideBar from "../SideBar/ShoppingSideBar";
import Header from "../../CommonSection/Header";
import Footer from "../../CommonSection/Footer";
import base from "../../Firebase";
import { UserContext } from "../../Routing";
import { FaChevronRight } from "react-icons/fa";
import { connect } from "react-redux";
import { requestApi } from "../../Redux/Action";
import {
  Container,
  Title,
  LeftWrapper,
  RightWrapper,
  ShopPage,
  PageBar,
  PageName,
  Overlay,
  OverlayContent,
  CloseButton,
  PageDenote,
  HomeTag,
  Loader,
} from "./Shoppingpagecss";
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
} from "../../Themes/Themes";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
const mapStateToProps = (state) => {
  return {
    data: state.data || [],
    Products: state.ShopProducts || [],
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApi }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shoppingpage);
export function Shoppingpage(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const user = useContext(UserContext);
  const { name, email, userName, index } = user;
  const [list, setList] = useState([]);
  const [Cards, setCards] = useState([]);
  const [Errors, setErrors] = useState();
  const [loading, setLoading] = useState(true);
  const [cartListItem, setCartListItem] = useState([]);
  const [noitem, setNoitem] = useState(false);
  // Fetching data from database
  useEffect(() => {
    dispatch(requestApi());
    fetchdata();
  }, [props.Products]);

  function fetchdata() {
    setList(props.Products);
    setCards(props.Products);
    const timer = setTimeout(() => {
      setLoading(props.loading);
    }, 3000);
    return () => clearTimeout(timer);
  }

  function setCartItems(data) {
    Object.values(data).map((element) => {
      if (element.index == index) {
        if (element.cartitems != undefined) {
          setCartListItem(Object.values(element.cartitems));
        }
      }
    });
  }
  // useEffect(() => {
  //   fetchdata();
  // }, []);

  // function fetchdata() {
  // const res = fetch("https://my-food-recipe.firebaseio.com/.json");
  // res
  //   .then((res) =>
  //     res.json().then((res) => {
  // setList(props.Products);
  // setCards(props.Products);
  //     })
  //   )
  //   .catch((err) => setErrors(err));
  //   const timer = setTimeout(() => {
  //     setLoading(props.loading);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }

  //Sorting the cards
  const [sortedList, setSortedList] = useState([]);
  const Sorting = (type) => {
    setPriceList([]);
    setCartListItem([]);
    let list1 = [...Cards];
    if (type == "Sort by Price:High to Low") {
      list1 = list1.sort((a, b) => parseFloat(b.rupees) - parseFloat(a.rupees));
    } else if (type == "Sort by Price:Low to High") {
      list1 = list1.sort((a, b) => parseFloat(a.rupees) - parseFloat(b.rupees));
    } else if (type == "Sort by Popularity") {
      list1 = list1.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
    } else if (type == "Default Sorting") {
      list1 = Cards;
    }
    setSortedList(list1);
  };

  //Search function
  const [searchItems, setSearchItems] = useState([]);
  function onChangeHandler(value) {
    setSortedList([]);
    setNoitem(false);
    setCartListItem([]);
    if (value.length != 0) {
      // setSearchTerm(value);
      const temp = PriceList.length == 0 ? [...Cards] : [...PriceList];
      const filteredlist = temp.filter(
        (data) =>
          value === "" || data.name.toLowerCase().includes(value.toLowerCase())
      );
      if (filteredlist.length != 0) setSearchItems(filteredlist);
      else {
        setNoitem(true);
        setSearchItems([]);
      }
    } else {
      setSearchItems([]);
    }
  }
  // useEffect(() => {
  //   const filteredlist = Cards.filter(
  //     (data) =>
  //       searchTerm === "" ||
  //       data.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   if (filteredlist.length != 0) setList(filteredlist);
  //   else setList([]);
  // }, [searchTerm]);

  //Adding items to the cart
  const SelectItem = (id) => {
    let count = 1;
    list.forEach((element) => {
      if (element.index === id) {
        cartListItem.forEach((item) => {
          if (item.index === element.index) {
            count = item.count + 1;
            setCartListItem(
              cartListItem.filter((item) => item.index !== element.index)
            );
          }
        });
        element = { ...element, count: count };
        setCartListItem((cartListItem) => [...cartListItem, element]);
      }
    });
  };

  //Filter the cards according to price
  const [PriceList, setPriceList] = useState([]);
  const filter = (left, right) => {
    setSortedList([]);
    setNoitem(false);
    setCartListItem([]);
    let tempList = [...Cards];
    const filteredlist = tempList.filter(
      (element) => element.rupees >= left && element.rupees <= right
    );
    if (filteredlist.length != 0) {
      setPriceList(filteredlist);
    } else {
      setPriceList([]);
    }
  };
  const [Backtoshop, setBacktoshop] = useState(false);
  const ViewCart = () => {
    setCartItems(data);
    setBacktoshop(true);
    setSuccess(false);
  };
  const [success, setSuccess] = useState(false);
  const CheckOut = () => {
    setCartItems(data);
    let reff = base
      .database()
      .ref("Users/" + index + "/cartitems")
      .remove();
    Object.values(data).map((element) => {
      if (element.index == index) {
        if (element.cartitems != undefined) {
          Object.values(element.cartitems).forEach((element) => {
            var today = new Date();
            const date =
              today.getFullYear() +
              "-" +
              (today.getMonth() + 1) +
              "-" +
              today.getDate();
            const time =
              today.getHours() +
              ":" +
              today.getMinutes() +
              ":" +
              today.getSeconds();
            element = { ...element, date: date };
            let ref = base
              .database()
              .ref("Users/" + index + "/purchasedItems")
              .push(element);
          });
        }
      }
    });
    setBacktoshop(true);
    setSuccess(true);
  };
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
          <Header selectTheme={selectTheme} Themes={Themes} />
          <ShopPage>
            <PageBar>
              <Container>
                <Title>
                  <PageName>Shop</PageName>
                  <PageDenote>
                    You are here: <HomeTag>Home</HomeTag> <FaChevronRight />{" "}
                    Shop
                  </PageDenote>
                </Title>
              </Container>
            </PageBar>
            <Container>
              <LeftWrapper>
                <ShoppingSideBar
                  onChangeHandler={onChangeHandler}
                  cartlist={props.data}
                  filter={filter}
                  ViewCart={ViewCart}
                  CheckOut={CheckOut}
                />
              </LeftWrapper>
              <RightWrapper>
                {!noitem ? (
                  cartListItem.length != 0 ? (
                    <ShoppingCards
                      list={cartListItem}
                      SelectItem={SelectItem}
                      Sorting={Sorting}
                    />
                  ) : sortedList.length == 0 ? (
                    <ShoppingCards
                      list={
                        searchItems.length != 0 || PriceList.length != 0
                          ? searchItems.length != 0
                            ? searchItems
                            : PriceList
                          : list
                      }
                      SelectItem={SelectItem}
                      Sorting={Sorting}
                    />
                  ) : (
                    <ShoppingCards
                      list={sortedList}
                      SelectItem={SelectItem}
                      Sorting={Sorting}
                    />
                  )
                ) : (
                  <div>
                    No such items...<a href="/shop">Back to Shop</a>
                  </div>
                )}
                {success && (
                  <Overlay>
                    <OverlayContent>
                      Your Products Will be delivered SuccessFully...Thank you
                      for Shopping...<a href="/shop">Back to Shop</a>
                    </OverlayContent>
                    <CloseButton
                      onClick={() => {
                        setSuccess(!success);
                      }}
                    >
                      X
                    </CloseButton>
                  </Overlay>
                )}
                {Backtoshop && (
                  <div>
                    <a href="/shop">Back to Shop</a>
                  </div>
                )}
              </RightWrapper>
            </Container>
          </ShopPage>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}
