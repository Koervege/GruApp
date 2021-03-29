import axios from 'axios';

const SUPPLIERS_SUCCESS = 'SUPPLIERS_SUCCESS';
const SUPPLIERS_ERROR = 'SUPPLIERS_ERROR';

export function getSuppliers() {
  return async function (dispatch) {
    try {
      const {
        data: { suppliers },
      } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/suppliers',
      });

      dispatch({ type: SUPPLIERS_SUCCESS, payload: suppliers });
    } catch (error) {
      dispatch({ type: SUPPLIERS_ERROR, payload: error });
    }
  };
}

const initialState = {
  suppliers: [],
  errorSuppliers: null,
};

export function suppliersReducer(state = initialState, action) {
  switch (action.type) {
    case SUPPLIERS_SUCCESS:
      return {
        ...state,
        suppliers: action.payload,
      };
    case SUPPLIERS_ERROR:
      return {
        ...state,
        errorSuppliers: action.payload,
      };
    default:
      return state;
  }
}
