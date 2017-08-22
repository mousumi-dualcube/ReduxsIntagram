import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'
import App from './components/app'
import PhotoGrid from './components/photoGrid'
import Single from './components/single'
import store, {history} from './store'
import { Provider } from 'react-redux'

const routes = (
	<Provider store={store}>
	  <Router history={history}>
	    <Route path='/' component={App}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="single" component={Single}></Route>
	    </Route>
	  </Router>
	</Provider>
);

export default routes