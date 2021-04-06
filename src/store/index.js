import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { towsReducer } from './towsReducer';
import { clientsReducer } from './clientsReducer';
import { servicesReducer } from './servicesReducer';
import { suppliersReducer } from './suppliersReducer';
import { usersReducer } from './usersReducer';
import { loginReducer } from './loginReducer';


const rootReducer = combineReducers({
  towsReducer,
  clientsReducer,
  servicesReducer,
  suppliersReducer,
  usersReducer,
  loginReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
