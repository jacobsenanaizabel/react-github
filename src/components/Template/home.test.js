import React from 'react'
import { shallow, mount } from 'enzyme'
import '../../setupTests'

import Home from './home'

describe('<Home />', () => { 
    it('renders home', () => {
        shallow(<Home />);
    })

    it('render titles in home', () => {
        let wrapper = shallow(<Home />);
    
        expect(wrapper.contains(<div className="title welcome" />));
        expect(wrapper.text()).toContain('Ache Seu Desenvolvedor Favorito');

        expect(wrapper.contains(<div className="subtitle" />));
        expect(wrapper.text()).toContain('De maneira muito rapida e facil, apenas digite');
    })

    it('simulate search user event', () =>{
        let wrapper = shallow(<Home />);

        expect(wrapper.find('button').simulate('click'));
    })
});