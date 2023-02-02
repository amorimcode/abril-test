import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducerObj from './reducers';

const init = () => createStore(rootReducerObj, applyMiddleware(thunk));

const store = init();

export default store;
