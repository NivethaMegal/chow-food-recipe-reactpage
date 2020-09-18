import React from 'react';
import {shallow} from 'enzyme';
import SubmitRecipe from './SubmitRecipe';

const findTestAttr = (wrapper, selector) => {
    if (!wrapper || !selector) return;
  
    return wrapper.find(selector);
  };
describe('Testing SubmitRecipe Page',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<SubmitRecipe/>);
    })
    it('to Match SnapShot',()=>{
        expect(wrapper).toMatchSnapshot();
    })
    it('calling Events',()=>{
        const ele=findTestAttr(wrapper,"[data-test='theme']")
        ele.props().selectTheme(0);
        const ele1=findTestAttr(wrapper,"[data-test='name']")
        ele1.props().onChange({target:{value:true}})
        const ele2=findTestAttr(wrapper,"[data-test='preparation-time']")
        ele2.props().onChange({target:{value:true}})
        const ele3=findTestAttr(wrapper,"[data-test='cooking-time']")
        ele3.props().onChange({target:{value:true}})
        const ele4=findTestAttr(wrapper,"[data-test='category']")
        ele4.props().onChange({target:{value:true}})
        const ele5=findTestAttr(wrapper,"[data-test='servings']")
        ele5.props().onChange({target:{value:true}})
        const ele6=findTestAttr(wrapper,"[data-test='calories']")
        ele6.props().onChange({target:{value:true}})
        const ele7=findTestAttr(wrapper,"[data-test='chef']")
        ele7.props().onChange({target:{value:true}})
        const ele8=findTestAttr(wrapper,"[data-test='ratings']")
        ele8.props().onChange({target:{value:true}})
        const ele9=findTestAttr(wrapper,"[data-test='description']")
        ele9.props().onChange({target:{value:true}})
        const ele10=findTestAttr(wrapper,"[data-test='submit']")
        const event = { preventDefault: jest.fn() }
        ele10.simulate('click', event)
        expect(event.preventDefault).toBeCalled()
    })
})