import React from 'react'
import { shallow, mount } from 'enzyme'
import Repository from './repository'

describe('Repository of a user', () =>{
    it('should be return repositories', () =>{
        const wrapper = shallow(<Repository/>)

        const repository = wrapper.state().repositoryListReturn
        expect(repository).toBeDefined
    })

})