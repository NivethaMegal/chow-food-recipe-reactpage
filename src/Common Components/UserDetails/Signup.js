import React, { useState, useEffect } from "react";
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
  UserAuthentication,
  RightForm,
  Error,
} from "./Usercss";
import { FaStar } from "react-icons/fa";
import UserImage from "../Asserts/receipe.19e8cda0.jpeg";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
export default function Signup() {
  const history = useHistory();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [RepeatPassword, setRepeatPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const loginpage = (e) => {
    e.preventDefault();
    if (
      Name.length >= 6 &&
      Email.length >= 6 &&
      UserName.length >= 6 &&
      Password.length >= 6 &&
      RepeatPassword.length >= 6
    ) {
      if (Password == RepeatPassword) {
        base
          .auth()
          .createUserWithEmailAndPassword(Email, Password)
          .then((user) => {
            let ref = base.database().ref("/Users").push();
            let key = ref.key;
            const Ref = base
              .database()
              .ref("Users/" + key)
              .set({
                index: key,
                name: Name,
                email: Email,
                userName: UserName,
              });
            history.push(`/login`);
          })
          .catch((error) => {
            console.log(error.message);
            setErrorMessage(error.message);
          });
      } else {
        setErrorMessage("Password doesn't match....");
      }
    } else {
      setErrorMessage("All fields should have atleast 6 Characters...");
    }
  };

  function showNotification() {
    const notification = new Notification("New Message from Adva Missions !!", {
      body: "You have one more activity to complete the mission...",
    });
    notification.onclick = () => {
      window.location.assign("http://google.com");
    };
  }

  useEffect(() => {
    console.log("hi");
    if ('serviceWorker' in navigator ) {
      console.log("hi");
      window.addEventListener('load', function() {
        navigator.serviceWorker.register("./sw.js");
      });
  }
    if (Notification.permission === "granted") {
      console.log("hi");
      Notification.requestPermission().then(function (permission) {
        if (permission != "granted") {
          alert("Notification failed!");
          return;
        }
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification("Hello world", {
            body: "Here is the body!",
          });
        });
      });
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Notification with ServiceWorker");
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // showNotification();
          navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification("Notification with ServiceWorker");
          });
        }
      });
    }
  });

  return (
    <UserAuthentication>
      <LeftImage>
        <Img src={UserImage} alt="UserImage" />
      </LeftImage>
      <RightForm>
        <Heading>Signup</Heading>
        <Error>{ErrorMessage}</Error>
        <div>
          <InputElement>
            <Label>Name</Label>
            <InputTag
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputElement>
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
            <Label>Username</Label>
            <InputTag
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </InputElement>
          <InputElement>
            <Label>Password</Label>
            <InputTag
              type={show1 ? "text" : "password"}
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Show onClick={() => setShow1(!show1)}>
              {show1 ? "Hide" : "Show"}
            </Show>
          </InputElement>
          <InputElement>
            <Label>Repeat Password</Label>
            <InputTag
              type={show2 ? "text" : "password"}
              placeholder="******"
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
            <Show onClick={() => setShow2(!show2)}>
              {show2 ? "Hide" : "Show"}
            </Show>
          </InputElement>
          <SignupButton onClick={(e) => loginpage(e)}>Sign Up</SignupButton>
          <SigninButton onClick={() => history.push(`/login`)}>
            Sign In
          </SigninButton>
        </div>
      </RightForm>
    </UserAuthentication>
  );
}
