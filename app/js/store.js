import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import the root reducer
import rootReducer from './reducers/index';

//data
import comments from '../data/comments'
import posts from '../data/posts'

//initial state
const initialState = {
	comments,
	posts
}

const store = createStore(rootReducer, initialState);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;