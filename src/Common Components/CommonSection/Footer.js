import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import {
  UpperFooter,
  LowerFooter,
  Container,
  UDiv,
  ColumnContent,
  ColumnList,
  List,
  Li,
  Content,
  A,
  ColumnLinks,
  Head,
  InputElement,
  InputTag,
  SubscribeButton,
  I,
} from "./Footercss";
export default function Footer() {
  const [recipe] = useState(["Browse Recipes", "Recipe Page", "Submit Recipe"]);
  const [archive] = useState([
    "June 2014",
    "July 2014",
    "August 2014",
    "September 2014",
    "November 2014",
  ]);
  return (
    <div>
      <UpperFooter>
        <Container>
          <UDiv>
            <ColumnContent>
              <Head>About</Head>
              <Content>
                Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida
                est fermentum vulputate. Pellentesque et ipsum in dui malesuada
                tempus.
              </Content>
            </ColumnContent>
            <ColumnList>
              <Head>Archives</Head>
              <List>
                {archive.map((ele, index) => (
                  <Li key={index}>
                    <I>
                      <FaCaretRight />
                    </I>
                    <ColumnLinks href="#">{ele}</ColumnLinks>
                  </Li>
                ))}
              </List>
            </ColumnList>
            <ColumnList>
              <Head>Recipes</Head>
              <List>
                {recipe.map((ele, index) => (
                  <Li key={index}>
                    <I>
                      <FaCaretRight />
                    </I>
                    <ColumnLinks href="#">{ele}</ColumnLinks>
                  </Li>
                ))}
              </List>
            </ColumnList>
            <ColumnContent>
              <Head>Newsletter</Head>
              <Content>
                Sign up to receive email updates on new product announcements,
                gift ideas, sales and more.
              </Content>
              <InputElement>
                <InputTag
                  type="email"
                  placeholder="mail@example.com"
                ></InputTag>
                <SubscribeButton>Subscribe</SubscribeButton>
              </InputElement>
            </ColumnContent>
          </UDiv>
        </Container>
      </UpperFooter>
      <LowerFooter>
        <Container>
          <div>
            © Copyright 2014 by <A href="#">Chow</A>. All Rights Reserved.
          </div>
        </Container>
      </LowerFooter>
    </div>
  );
}
