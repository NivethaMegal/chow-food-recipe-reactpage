import React, { useState, useEffect, useContext } from "react";
import Header from "../CommonSection/Header";
import { useHistory } from "react-router-dom";
import Footer from "../CommonSection/Footer";
import { FaChevronRight, FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { UserContext } from "../Routing";
import base from "../../Common Components/Firebase";
import {
  Container,
  Title,
  PageBar,
  PageName,
  PageDenote,
  HomeTag,
  Loader,
  ProductCard,
  ProductImg,
  ProductContent,
  Name,
  Price,
  Description,
  CartIcon,
  QuantityChanger,
  ChangeButton,
  Number,
  Add,
  Icon,
  AddButton,
} from "./Productcss";
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
} from "../Themes/Themes";
// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch({ type: "increment" });
//     },
//     decrement: () => {
//       dispatch({ type: "decrement" });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Product);
export default function Product(props) {
  const user = useContext(UserContext);
  const { name, email, userName, index } = user;
  const history = useHistory();
  const [added, setAdded] = useState(false);
  let product =
    props.location.state != undefined
      ? props.location.state.data
      : {
          image: "shop_item_05",
          tag: "spices",
          name: "Cumin Seeds",
          rupees: "32.99",
          rating: "3",
          index: "4",
          description:
            "Maecenas consequat mauris nec semper tristique. Etiam fermentum augue ac vulputate pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque arcu.",
        };
  const [quantity, setQuantity] = useState(false);
  const [count, setcount] = useState(0);
  const increment = () => {
    product.count = product.count + 1;
    setcount(product.count + 1);
  };

  const decrement = () => {
    product.count = product.count - 1;
    setcount(product.count - 1);
  };
  const addtocart = () => {
    if (product.count > 0) {
      const res = fetch("https://my-food-recipe.firebaseio.com/.json");
      res.then((res) =>
        res.json().then((res) => {
          const obj = Object.values(res.Users);
          obj.forEach((element) => {
            if (element.index == index) {
              if (element.cartitems != undefined) {
                const keys = Object.keys(element.cartitems);
                console.log(keys);
                Object.values(element.cartitems).forEach((element, key) => {
                  if (element.name == product.name) {
                    let ref = base
                      .database()
                      .ref("Users/" + index + "/cartitems/" + keys[key])
                      .remove();
                  }
                });
              }
            }
          });
        })
      );
      let ref = base
        .database()
        .ref("Users/" + index + "/cartitems")
        .push(product);
      setTimeout(() => {
        setAdded(true);
        setQuantity(false);
      }, 2000);
    } else {
      setQuantity(true);
      setAdded(false);
    }
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
      <Header selectTheme={selectTheme} Themes={Themes} />
      <PageBar>
        <Container>
          <Title>
            <PageName>Shop</PageName>
            <PageDenote>
              You are here: <HomeTag>Home</HomeTag> <FaChevronRight />{" "}
              <HomeTag>Shop</HomeTag> <FaChevronRight /> {product.name}
            </PageDenote>
          </Title>
        </Container>
      </PageBar>
      <Container>
        <ProductCard>
          <ProductImg
            src={require(`../Asserts/${product.image}.jpg`)}
            alt="ProductImage"
          />
          <ProductContent>
            <Name>{product.name}</Name>
            <Price>${product.rupees}</Price>
            <Description>{product.description}</Description>
            <CartIcon>
              <QuantityChanger>
                <ChangeButton onClick={() => increment()}>+</ChangeButton>
                <Number type="text" value={product.count} />
                <ChangeButton onClick={() => decrement()}>-</ChangeButton>
              </QuantityChanger>
              <Add>
                <Icon>
                  <FaShoppingCart />
                </Icon>
                <AddButton onClick={() => addtocart()}>Add to cart</AddButton>
              </Add>
            </CartIcon>
            {added && (
              <div>Your Product is Added to the cart Successfully...</div>
            )}
            {quantity && <div>Your Quantity is Invalid...</div>}
          </ProductContent>
        </ProductCard>
        <a href="/shop">Back to Shop...</a>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
