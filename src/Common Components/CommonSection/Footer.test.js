import Footer from "./Footer";
import React from 'react';
import {shallow} from 'enzyme';

describe('Footer Page',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<Footer />);
    })
    it('to Match SnapShot',()=>{
        expect(wrapper).toMatchSnapshot();
    });
});