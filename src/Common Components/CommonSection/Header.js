import React, { useState, useContext, useEffect } from "react";
import logo from "../Asserts/logo.png";
import base from "../Firebase";
import { UserContext } from "../Routing";
import { FaCaretDown } from "react-icons/fa";
import { useHistory, Link } from "react-router-dom";
import {
  Div,
  List,
  A,
  Container,
  Logo,
  Li,
  I,
  DropDownListContainer,
  DropDownList,
  DropDownLink,
  HeaderMenu,
  HeaderIcon,
  ListItem,
  SortingDropdown,
  LogoutButton,
  LogoutContent,
  CloseButton,
  Content,
} from "./Headercss";
import Themebutton from "../Themes/ThemeButton";
export default function Header(props) {
  const user = useContext(UserContext);
  const { name, email, userName, index } = user;

  //logout Authentication
  const logout = () => {
    base.auth().signOut();
    sessionStorage.setItem("user",false);
    history.push("/login");
  };

  const demos = ["Grid", "List"];
  const history = useHistory();
  const toggling = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = useState(false);
  const [menuShow, setMenushow] = useState(false);
  const [popup, setPopup] = useState(false);
  return (
    <div>
      <Themebutton selectTheme={props.selectTheme} Theme={props.Themes} />
      <Container>
        <Div>
          <Logo>
            <A>
              <img src={logo} alt="Chow" />
            </A>
            <HeaderMenu
              href="javascript:;"
              title="menu icon"
              data-test="menu"
              onClick={() => setMenushow(!menuShow)}
            >
              <HeaderIcon></HeaderIcon>
              <HeaderIcon></HeaderIcon>
              <HeaderIcon></HeaderIcon>
            </HeaderMenu>
          </Logo>
          <div>
            <nav>
              <List show={menuShow}>
                <Li active={window.location.pathname === "/home"}>
                  <A to="/home">Home</A>
                </Li>
                <SortingDropdown>
                  <Li
                    active={
                      window.location.pathname === "/Grid" ||
                      window.location.pathname === "/List"
                    }
                    onClick={toggling}
                  >
                    {/* <A onClick={toggling} to='/home'> */}
                    Demos{" "}
                    <I>
                      <FaCaretDown />
                    </I>
                    {/* </A> */}
                  </Li>
                  {isOpen && (
                    <DropDownListContainer>
                      <DropDownList>
                        {demos.map((option, index) => (
                          <ListItem key={Math.random()}>
                            <DropDownLink href={option}>{option}</DropDownLink>
                          </ListItem>
                        ))}
                      </DropDownList>
                    </DropDownListContainer>
                  )}
                </SortingDropdown>
                <Li
                  active={
                    window.location.pathname == "/recipe-page" ||
                    window.location.pathname == "/recipes"
                  }
                >
                  <A to="/recipe-page">Recipes </A>
                </Li>
                <Li active={window.location.pathname === "/shop"}>
                  <A to="/shop">Shop </A>
                </Li>
                <Li active={window.location.pathname === "/submitRecipe"}>
                  <A to="submit-recipe">Submit Recipe</A>
                </Li>
                <Li active={window.location.pathname === "/myprofile"}>
                  <A to="myprofile">{name}</A>
                </Li>
                <Li active={window.location.pathname === "/logout"}>
                  <A onClick={() => setPopup(!popup)} data-test="logout">
                    Logout
                  </A>
                  {popup && (
                    <LogoutContent>
                      <Content>
                        <CloseButton onClick={() => setPopup(false)}>
                          X
                        </CloseButton>
                        <div>Are you sure you want to logout ?</div>
                        <LogoutButton onClick={() => logout()}>
                          Logout
                        </LogoutButton>
                      </Content>
                    </LogoutContent>
                  )}
                </Li>
              </List>
            </nav>
          </div>
        </Div>
      </Container>
    </div>
  );
}
