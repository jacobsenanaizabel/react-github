import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import 'jest-enzyme'

import '../style/index.scss'
import App from './Main/app'
import 'bootstrap'

WebFont.load({
  google: {
    families: [ 'Bangers', 'Cabin Sketch','Roboto Condensed','Roboto']
  }
});

ReactDOM.render(<App/>, document.getElementById('root'))