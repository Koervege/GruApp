import axios from 'axios';

const SERVICES_LOADING = 'SERVICES_LOADING';
const SERVICES_SUCCESS = 'SERVICES_SUCCESS';
const SERVICES_ERROR = 'SERVICES_ERROR';

export function getServices() {
  return async function (dispatch) {
    dispatch({ type: SERVICES_LOADING });
    try {
      const {
        data: { services },
      } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/services',
      });

      dispatch({ type: SERVICES_SUCCESS, payload: services });
    } catch (error) {
      dispatch({ type: SERVICES_ERROR, payload: error });
    }
  };
}

const initialState = {
  services: [],
  error: null,
};

export function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICES_LOADING:
      return state;
    case SERVICES_SUCCESS:
      return {
        ...state,
        services: action.payload,
      };
    case SERVICES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
