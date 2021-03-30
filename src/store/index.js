import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { towsReducer } from './towsReducer';
import { clientsReducer } from './clientsReducer';
import { servicesReducer } from './servicesReducer';
import { suppliersReducer } from './suppliersReducer';


const rootReducer = combineReducers({
  towsReducer,
  clientsReducer,
  servicesReducer,
  suppliersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
