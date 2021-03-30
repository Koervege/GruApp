import axios from 'axios';

const TOWS_LOADING = 'TOWS_LOADING';
const TOWS_SUCCESS = 'TOWS_SUCCESS';
const TOWS_ERROR = 'TOWS_ERROR';
const TOWS_FINISHED = 'TOWS_FINISHED';
const TOWS_DELETE_ERROR = 'TOWS_DELETE_ERROR';

export function getTows() {
  return async function (dispatch) {
    dispatch({ type: TOWS_LOADING });
    try {
      const token = localStorage.getItem('token');

      const { data: { tows, userID } } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/tows',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: TOWS_SUCCESS, payload: [tows, userID] });

    } catch (error) {
      dispatch({ type: TOWS_ERROR, payload: error });

    } finally {
      dispatch({ type: TOWS_FINISHED });
    }
  };
};

export function deleteErrorTows() {
  return function(dispatch) {
    dispatch({ type: TOWS_DELETE_ERROR });
  };
};

const initialState = {
  loading: false,
  tows: [],
  userID: '',
  errorTows: null,
};

export function towsReducer( state = initialState, action ){
  switch ( action.type ) {
    case TOWS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TOWS_SUCCESS:
      return {
        ...state,
        tows: action.payload[0],
        userID: action.payload[1],
      };
    case TOWS_ERROR:
      return {
        ...state,
        errorTows: action.payload,
      };
    case TOWS_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case TOWS_DELETE_ERROR:
      return {
        ...state,
        errorTows: null,
      };
    default:
      return state;
  }
}