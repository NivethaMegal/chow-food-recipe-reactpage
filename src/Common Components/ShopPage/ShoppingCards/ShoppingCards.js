import React, { useState } from "react";
import { FaShoppingCart, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Link, BrowserRouter as Router } from "react-router-dom";
import {
  ShoppingCard,
  SortingDropdown,
  Icon,
  Card,
  ProductImg,
  Img,
  ProductName,
  Tag,
  Amount,
  CardList,
  ProductDescription,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  CartIcon,
} from "./ShoppingCardscss";
export default function ShoppingCards(props) {
  const history = useHistory();
  const [select, setSelect] = useState(0);
  const options = [
    "Default Sorting",
    "Sort by Popularity",
    "Sort by Price:High to Low",
    "Sort by Price:Low to High",
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [isShown, setIsShown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  //Dropdown Selector
  const onOptionClicked = (value) => () => {
    props.Sorting(value);
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <ShoppingCard>
      <SortingDropdown>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Default  Sorting"}
          <Icon>{(isOpen && <FaCaretUp />) || <FaCaretDown />}</Icon>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option, index) => (
                <ListItem
                  onMouseEnter={() => setSelect(index)}
                  onMouseLeave={() => setSelect(false)}
                  hover={select == index}
                  onClick={onOptionClicked(option)}
                  key={Math.random()}
                >
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </SortingDropdown>
      {props.list.length != 0 ? (
        <CardList>
          {props.list.map((element, index) => (
            <Card>
              <ProductImg
                onMouseEnter={() => setIsShown(index)}
                onMouseLeave={() => setIsShown(false)}
              >
                <Img
                  src={require(`../../Asserts/${element.image}.jpg`)}
                  alt="ProductImage"
                  onClick={() =>
                    history.push("/product-page", { data: element })
                  }
                />
                <CartIcon
                  hover={isShown === index}
                  onClick={() =>
                    history.push("/product-page", { data: element })
                  }
                >
                  <FaShoppingCart />
                </CartIcon>
              </ProductImg>
              <ProductDescription>
                <Tag>{element.tag}</Tag>
                <ProductName>{element.name}</ProductName>
                <Amount>${element.rupees}</Amount>
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
    </ShoppingCard>
  );
}
