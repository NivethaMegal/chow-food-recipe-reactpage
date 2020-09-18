import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import {
  Heading,
  Icon,
  Color,
  Button,
  Switcher,
  ToggleStyleSwitcher,
} from "./ThemeStyle";
export default function Themebutton(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Switcher>
        <ToggleStyleSwitcher visible={visible}>
          <Heading>Style Switcher</Heading>
          <Color>
            {props.Theme.map((element, index) => (
              <Button
                onClick={() => props.selectTheme(element.id)}
                color={element.color.color}
              ></Button>
            ))}
          </Color>
        </ToggleStyleSwitcher>
        <Icon onClick={() => setVisible(!visible)} visible={visible}>
          <AiFillSetting />
        </Icon>
      </Switcher>
    </div>
  );
}
