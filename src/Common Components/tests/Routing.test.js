import Routing from "../Routing";
import { shallow } from "enzyme";
import React from "react";

describe("Testing for Routing", () => {
  let wrapper;
  let shallowInstance;
  beforeEach(() => {
    wrapper = shallow(<Routing />);
    shallowInstance = wrapper.instance();
  });
  it("to Match SnapShot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("componentDidMount", () => {
    const componentDidMount = jest.spyOn(shallowInstance, "componentDidMount");
    const get = componentDidMount.bind({
      state: {
        ...wrapper.state(),
      },
      setState: jest.spyOn(shallowInstance, "setState"),
    });
    get();
    expect(componentDidMount).toHaveBeenCalledTimes(1);
  });
});
