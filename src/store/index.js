import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { servicesReducer } from './servicesReducer';
import { clientsReducer } from './clientsReducer';
import { suppliersReducer } from './suppliersReducer';


const rootReducer = combineReducers({
  servicesReducer,
  clientsReducer,
  suppliersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
