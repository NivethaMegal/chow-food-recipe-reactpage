import Profile from "./Profile";
import React from 'react';
import {shallow} from 'enzyme';

const findTestAttr = (wrapper, selector) => {
    if (!wrapper || !selector) return;
  
    return wrapper.find(selector);
  };
describe('Testing Profile Page',()=>{
    let wrapper;
    let props={
        loading:true
    }
    beforeEach(()=>{
        wrapper=shallow(<Profile {...props}/>);
    })
    it('to Match SnapShot',()=>{
        expect(wrapper).toMatchSnapshot();
    });



    
    // it('to trigger events',()=>{
    //     wrapper.setProps({ loading: false });
    //     const wrapper1=shallow(<Profile/>);;
    //     const ele=findTestAttr(wrapper,"[data-test='theme']")
    //     console.log(ele.debug())
    //     // ele.props().selectTheme(0);
    //     const ele1=findTestAttr(wrapper,"[data-test='name']")
    //     ele1.props().onChange({target:{value:true}})
    //     const ele2=findTestAttr(wrapper,"[data-test='email']")
    //     ele2.props().selectTheme(0);
    //     const ele3=findTestAttr(wrapper,"[data-test='username']")
    //     ele3.props().onChange({target:{value:true}})
    //     const ele4=findTestAttr(wrapper,"[data-test='saveclick']")
    //     const event = { preventDefault: jest.fn() }
    //     ele4.simulate('click', event)
    //     expect(event.preventDefault).toBeCalled()
    // })
});