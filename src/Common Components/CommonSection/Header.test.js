import Header from "./Header";
import React from 'react';
import {shallow} from 'enzyme';

const findTestAttr = (wrapper, selector) => {
    if (!wrapper || !selector) return;
  
    return wrapper.find(selector);
  };
describe('Footer Page',()=>{
    let wrapper;
    const props={
        selectTheme:jest.fn(),
        Themes:true,
        history:{push:jest.fn()}
    };
    beforeEach(()=>{
        wrapper=shallow(<Header props={props}/>);
    })
    it('to Match SnapShot',()=>{
        expect(wrapper).toMatchSnapshot();
    });
    it('to call events',()=>{
        const ele=findTestAttr(wrapper,"[data-test='menu']")
        ele.props().onClick();
        const ele1=findTestAttr(wrapper,"[data-test='logout']")
        ele1.props().onClick();
    });
});