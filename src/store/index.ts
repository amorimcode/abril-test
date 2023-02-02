import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducerObj from './reducers';

const store = createStore(rootReducerObj, applyMiddleware(thunk));

export default store;
