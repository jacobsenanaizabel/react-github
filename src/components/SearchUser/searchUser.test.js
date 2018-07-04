import React from 'react'
import { shallow, mount } from 'enzyme'
import SearchUser from './searchUser'

describe('Search User', () =>{
    it('should be return list of users', () =>{
        const wrapper = shallow(<SearchUser/>)

        const userList = wrapper.state().userListReturn
        expect(userList).toBeDefined
    })

})