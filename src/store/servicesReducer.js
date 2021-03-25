import axios from 'axios';

const SERVICES_LOADING = 'SERVICES_LOADING';
const SERVICES_SUCCESS = 'SERVICES_SUCCESS';
const SERVICES_ERROR = 'SERVICES_ERROR';
const SERVICES_FINISHED = 'SERVICES_FINISHED';

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
    } finally {
      dispatch({ type: SERVICES_FINISHED});
    }
  };
}

const initialState = {
  loading: false,
  services: [],
  error: null,
};

export function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICES_LOADING:
      return {
        ...state,
        loading: true,
      };
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
    case SERVICES_FINISHED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}