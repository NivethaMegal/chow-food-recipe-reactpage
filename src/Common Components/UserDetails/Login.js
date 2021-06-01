import React, { useState } from "react";
import UserImage from "../Asserts/receipe.19e8cda0.jpeg";
import base from "../Firebase";
import {
  Heading,
  InputElement,
  Label,
  InputTag,
  SigninButton,
  SignupButton,
  LeftImage,
  Show,
  Img,
  Error,
  UserAuthentication,
  RightForm,
} from "./Usercss";
import { useHistory } from "react-router-dom";
export default function Login(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory();
  const homepage = (e) => {
    e.preventDefault();
    base
      .auth()
      .signInWithEmailAndPassword(Email, Password)
      .then((user) => {
        sessionStorage.setItem("user",true)
        setTimeout(() => {
          history.push(`/home`);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <UserAuthentication>
      <LeftImage>
        <Img src={UserImage} alt="UserImage" />
      </LeftImage>
      <RightForm>
        <Heading>Login</Heading>
        <Error>{ErrorMessage}</Error>
        <div>
          <InputElement>
            <Label>Email</Label>
            <InputTag
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputElement>
          <InputElement>
            <Label>Password</Label>
            <InputTag
              type={show ? "text" : "password"}
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Show
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "Hide" : "Show"}
            </Show>
          </InputElement>
          <SignupButton onClick={(e) => homepage(e)}>Log In</SignupButton>
          <SigninButton onClick={() => history.push(`/`)}>Sign Up</SigninButton>
        </div>
      </RightForm>
    </UserAuthentication>
  );
}
