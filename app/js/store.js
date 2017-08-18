import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { getAllProducts } from './actions'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts());

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>, 
	document.getElementById('app')
)