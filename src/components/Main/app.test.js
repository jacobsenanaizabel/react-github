import React from 'react'
import '../../setupTests'
import renderer from 'react-test-renderer';

import App from './app'

describe('<App />', () => {

    it('renders app with Snapshot', () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});