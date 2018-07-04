import React from 'react'
import { shallow, mount } from 'enzyme'
import Profile from './profile'

describe('Profile User', () =>{

    it('should be return profile user', () =>{
        const wrapper = shallow(<Profile/>)

        const user = wrapper.state().urlUser
        expect(user).toBeDefined
    })

})