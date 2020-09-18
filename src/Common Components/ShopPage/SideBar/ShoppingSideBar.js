import React, { useState, useContext, useEffect } from "react";
import base from "../../Firebase";
import { BsSearch } from "react-icons/bs";
import { UserContext } from "../../Routing";
import {
  InputBox,
  InputTag,
  Heading,
  SearchIcon,
  CartList,
  List,
  Cart,
  CartItemlist,
  Img,
  Track,
  Thumbleft,
  Thumbright,
  Name,
  Slider,
  Range,
  RangeDivision,
  Input,
  Button,
  CartViewButton,
  CheckOutButton,
  FilterButton,
  ItemDetails,
  Price,
} from "./ShoppingSideBarcss";
export default function ShoppingSideBar(props) {
  const user = useContext(UserContext);
  const { name, email, userName, index } = user;
  const [CartListItem, setCartListItem] = useState([]);
  useEffect(() => {
    setCartItems(props.cartlist);
  }, []);

  // function fetchdata() {
  //   const res = fetch("https://my-food-recipe.firebaseio.com/.json");
  //   res.then((res) =>
  //     res.json().then((res) => {
  //       const obj = Object.values(res.Users);
  //       obj.forEach((element) => {
  //         if (element.index == index) {
  //           if(element.cartItems!=undefined){
  //           console.log(Object.values(element.cartItems))
  //           setList(Object.values(element.cartItems));
  //           }
  //         }
  //       });
  //     })
  //   );
  // }
  function setCartItems(data) {
    console.log(data);
    Object.values(data).map((element) => {
      if (element.index == index) {
        if (element.cartitems != undefined) {
          setCartListItem(Object.values(element.cartitems));
        }
      }
    });
  }

  function caltotalPrice(cartlist) {
    let temp = 0;
    cartlist.forEach((element) => {
      temp = temp + element.rupees * element.count;
    });
    return temp;
  }
  const [Leftvalue, setLeftValue] = useState(0);
  const [Rightvalue, setRightValue] = useState(50);
  const [thumbLeft, setThumbLeft] = useState("0%");
  const [thumbRight, setThumbRight] = useState("0%");
  const [RangeLeft, setRangeLeft] = useState("0%");
  const [RangeRight, setRangeRight] = useState("0%");

  //Filtering range functions
  const calLeftValue = (value) => {
    console.log("Left", Leftvalue);
    setLeftValue(value);
    let min = 0;
    let max = 50;
    setLeftValue(Math.min(value, Rightvalue - 1));
    let percent = ((value - min) / (max - min)) * 100;
    if (percent < 50) {
      setThumbLeft(percent + "%");
      setRangeLeft(percent + "%");
    }
  };
  const calRightValue = (value) => {
    console.log("right", Rightvalue);
    setRightValue(value);
    let min = 0;
    let max = 50;
    setRightValue(Math.max(value, Leftvalue + 1));
    let percent = ((value - min) / (max - min)) * 100;
    if (100 - percent < 50) {
      setThumbRight(100 - percent + "%");
      setRangeRight(100 - percent + "%");
    }
  };
  return (
    <div>
      <InputBox>
        <InputTag
          type="text"
          placeholder="Search for Products"
          onChange={(e) => props.onChangeHandler(e.target.value)}
        />
        <SearchIcon>
          <BsSearch />
        </SearchIcon>
      </InputBox>
      <CartList>
        <Heading>Cart</Heading>
        {CartListItem.length != 0 ? (
          <List>
            {CartListItem.map((element, index) => (
              <Cart>
                <CartItemlist>
                  <div>
                    <Img
                      src={require(`../../Asserts/${element.image}.jpg`)}
                      alt="Image"
                    />
                  </div>
                  <ItemDetails>
                    <Name>{element.name}</Name>
                    <Price>
                      {element.count}x${element.rupees}
                    </Price>
                  </ItemDetails>
                </CartItemlist>
              </Cart>
            ))}
            <div>
              SubTotal: <Price>${caltotalPrice(CartListItem)}</Price>
            </div>
            <CartViewButton onClick={() => props.ViewCart()}>
              ViewCart
            </CartViewButton>
            <CheckOutButton onClick={() => props.CheckOut()}>
              CheckOut
            </CheckOutButton>
          </List>
        ) : (
          <List>No Items in the Cart!!!</List>
        )}
        <Heading>Filter By Price</Heading>
        <RangeDivision>
          <Input
            type="range"
            value={Leftvalue}
            min="0"
            max="50"
            onChange={(changeEvent) => calLeftValue(changeEvent.target.value)}
          />
          <Input
            type="range"
            value={Rightvalue}
            min="0"
            max="50"
            onChange={(changeEvent) => calRightValue(changeEvent.target.value)}
          />
          <Slider>
            <Track></Track>
            <Range RangeLeft={RangeLeft} RangeRight={RangeRight}></Range>
            <Thumbleft thumbLeft={thumbLeft}></Thumbleft>
            <Thumbright thumbRight={thumbRight}></Thumbright>
          </Slider>
        </RangeDivision>
        <FilterButton>
          <Price>
            Price: ${Leftvalue} - ${Rightvalue}
          </Price>
          <Button onClick={() => props.filter(Leftvalue, Rightvalue)}>
            Filter
          </Button>
        </FilterButton>
      </CartList>
    </div>
  );
}
