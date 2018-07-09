import React from 'react'
import { shallow } from 'enzyme'
import '../../setupTests'

import Footer from './footer'

describe('<Footer />', () => { 
    it('renders footer', () => {
        shallow(<Footer />);
    })

    it('render the title', () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper.text()).toContain('Feito com ❤ por Ana Jacobsen.')
    })

});