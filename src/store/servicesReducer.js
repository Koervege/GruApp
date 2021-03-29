import axios from 'axios';

const SERVICES_LOADING = 'SERVICES_LOADING';
const SERVICES_SUCCESS = 'SERVICES_SUCCESS';
const SERVICES_ERROR = 'SERVICES_ERROR';
const SERVICES_FINISHED = 'SERVICES_FINISHED';
const SERVICES_DELETE_ERROR = 'SERVICES_DELETE_ERROR';

export function getServices() {
  return async function (dispatch) {
    dispatch({ type: SERVICES_LOADING });
    try {
      const token = localStorage.getItem('token');

      const { data: { services, userID } } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/services',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: SERVICES_SUCCESS, payload: [services, userID] });
    } catch (error) {
      dispatch({ type: SERVICES_ERROR, payload: error });
    } finally {
      dispatch({ type: SERVICES_FINISHED});
    }
  };
}

export function deleteError(){
  return function(dispatch) {
    dispatch({ type: SERVICES_DELETE_ERROR })
  }
}

const initialState = {
  loading: false,
  services: [],
  userID: '',
  errorServices: null,
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
        services: action.payload[0],
        userID: action.payload[1],
      };
    case SERVICES_ERROR:
      return {
        ...state,
        errorServices: action.payload,
      };
    case SERVICES_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case SERVICES_DELETE_ERROR:
      return {
        ...state,
        errorServices: null,
      }
    default:
      return state;
  }
}
