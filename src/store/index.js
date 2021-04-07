import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { towsReducer } from './towsReducer';
import { servicesReducer } from './servicesReducer';
import { usersReducer } from './usersReducer';
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({
  towsReducer,
  servicesReducer,
  usersReducer,
  loginReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
