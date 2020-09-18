import React, { useState, useContext, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { UserContext } from "../Routing";
import { ClassicSpinner } from "react-spinners-kit";
import {
  Title,
  PageBar,
  PageName,
  PageDenote,
  Loader,
  HomeTag,
  Label,
  Container,
  InputElement,
  InputTag,
  SubmitButton,
  RecipeForm,
  Card,
  ProductImg,
  Img,
  ProductName,
  Tag,
  Amount,
  CardList,
  ProductDescription,
} from "./Profilecss";
import Header from "../CommonSection/Header.js";
import base from "../Firebase";
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
} from "../Themes/Themes.js";
import Footer from "../CommonSection/Footer";
export default function Profile() {
  const user = useContext(UserContext);
  const [Error, setError] = useState("");
  const [Success, setSuccess] = useState(false);
  const { name, email, userName, index } = user;
  const [loading, setLoading] = useState(true);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = () => {
    base.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(base.auth().currentUser.uid);
        const res = fetch("https://my-food-recipe.firebaseio.com/.json");
        res
          .then((res) =>
            res.json().then((res) => {
              const obj = Object.values(res.Users);
              obj.forEach((element) => {
                if (element.email == base.auth().currentUser.email) {
                  console.log(element);
                  setName(element.name);
                  setEmail(element.email);
                  setUserName(element.userName);
                  if (element.purchasedItems != null)
                    setPurchasedProducts(Object.values(element.purchasedItems));
                }
              });
            })
          )
          .catch((error) => setError(error));
      }
    });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  };
  const Update = (e) => {
    e.preventDefault();
    let ref = base
      .database()
      .ref("Users/" + index)
      .update({ name: Name, email: Email, userName: UserName })
      .then(setSuccess(true))
      .catch((error) => setError(true));
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
        setTheme(element.color);
      }
    });
  };
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [UserName, setUserName] = useState();
  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Loader>
          <ClassicSpinner size={30} color="#686769" loading={loading} />
        </Loader>
      ) : (
        <div data-test="theme">
          <Header selectTheme={selectTheme} Themes={Themes} />
          <PageBar>
            <Container>
              <Title>
                <PageName>My Profile</PageName>
                <PageDenote>
                  You are here: <HomeTag>Home</HomeTag> <FaChevronRight />
                  My Profile
                </PageDenote>
              </Title>
            </Container>
          </PageBar>
          <Container>
            <RecipeForm>
              <InputElement>
                <Label>Name</Label>
                <InputTag
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  data-test="name"
                  value={Name}
                />
              </InputElement>
              <InputElement>
                <Label>Email Id</Label>
                <InputTag
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  data-test="email"
                  value={Email}
                />
              </InputElement>
              <InputElement>
                <Label>UserName</Label>
                <InputTag
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  data-test="username"
                  value={UserName}
                />
              </InputElement>
              <SubmitButton onClick={(e) => Update(e)} data-test="saveclick">
                Save Changes
              </SubmitButton>
              {Success && (
                <div>
                  Your Profile is updated Successfully...
                  <a href="/home">Back to HomePage</a>
                </div>
              )}
              <div>{Error}</div>
            </RecipeForm>
            <Label>Purchased Products</Label>
            {purchasedProducts.length != 0 ? (
              <CardList>
                {purchasedProducts.map((element, index) => (
                  <Card>
                    <ProductImg>
                      <Img
                        src={require(`../Asserts/${element.image}.jpg`)}
                        alt="ProductImage"
                      />
                    </ProductImg>
                    <ProductDescription>
                      <Tag>{element.tag}</Tag>
                      <ProductName>{element.name}</ProductName>
                      <Amount>${element.rupees}</Amount>
                      <ProductName>Purchased on: {element.date}</ProductName>
                    </ProductDescription>
                  </Card>
                ))}
              </CardList>
            ) : (
              <CardList>
                No Such Items...
                <a href="/shop">Back to Shop Page</a>
              </CardList>
            )}
          </Container>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}
