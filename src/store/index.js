import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { servicesReducer } from './servicesReducer';

const rootReducer = combineReducers({
  servicesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
