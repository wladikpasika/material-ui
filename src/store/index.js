import { createStore } from 'redux';

import { reducers } from './reducers';

export const middleware = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(reducers, middleware); 


