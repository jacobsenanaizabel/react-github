import React from 'react'
import { shallow, mount } from 'enzyme'
import Home from './home'

describe('Home Test', () =>{
    it('should be click and return component', () =>{
        const wrapper = shallow(<Home/>)

        const btn = wrapper.find('button')
        btn.simulate('click')

        expect(btn).toBeCalled
    })

})