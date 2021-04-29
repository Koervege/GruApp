import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { towsReducer } from './towsReducer';
import { servicesReducer } from './servicesReducer';
import { usersReducer } from './usersReducer';


const middleware = [
  thunk,
]

const rootReducer = combineReducers({
  towsReducer,
  servicesReducer,
  usersReducer,
});

export const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
);
