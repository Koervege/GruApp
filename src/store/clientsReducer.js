import axios from 'axios';

const CLIENTS_SUCCESS = 'CLIENTS_SUCCESS';
const CLIENTS_ERROR = 'CLIENTS_ERROR';

export function getClients() {
  return async function (dispatch) {
    try {

      const { data: { clients } } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/clients',
      });

      dispatch({ type: CLIENTS_SUCCESS, payload: clients });
    } catch (error) {
      dispatch({ type: CLIENTS_ERROR, payload: error });
    } 
  };
}

const initialState = {
  clients: [],
  error: null,
};

export function clientsReducer(state = initialState, action) {
  switch (action.type) {
    case CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.payload,
      };
    case CLIENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
