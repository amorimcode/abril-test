import { createStore } from 'redux';

import rootReducerObj from './reducers';

// const init = () => {
//   return createStore(rootReducerObj, compose(
//     applyMiddleware(thunk),
//     composeWithDevTools()
//   ));
// };

const store = createStore(rootReducerObj);

export default store;
