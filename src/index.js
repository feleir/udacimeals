import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker();
