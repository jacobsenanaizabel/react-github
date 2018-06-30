import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import '../style/index.scss'
import App from './app'

const reducers = combineReducers({
    searchUser: () => ({ value: 'Test Redux' })
})

ReactDOM.render(<App/>, document.getElementById('root'))