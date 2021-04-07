import axios from 'axios'

const USER_LOGIN = 'USER_LOGIN';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
const DELETE_LOGIN_ERRROR = 'DELETE_LOGIN_ERROR'

export function loginUser( email, password) {
  return async function(dispatch) {
    try{
      dispatch({ type: USER_LOGIN })
      const { data: { token, userType,userFront } }= await axios({
            method: 'POST',
            baseURL: process.env.REACT_APP_SERVER_URL,
            url: '/users/signin',
            data: {
              email,
              password,
            }
        
      });
      localStorage.setItem('token', token)
      dispatch({ type: USER_LOGIN, payload: {userFront, userType } })
    } catch(error) {
      dispatch({ type: USER_LOGIN_ERROR, payload: error })
    }
  }
}

const initialState = {
  userFront: {},
  userType: '',
  loading: false,
  errorLogin: null,
}

export function deleteError(){
  return {
    type: DELETE_LOGIN_ERRROR,
  }
}

export function loginReducer(state = initialState, action) {
  switch(action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        errorLogin: action.payload,
      }
    case DELETE_LOGIN_ERRROR:
      return {
        ...state,
        loading: false,
        errorLogin: null,
      }
    default:
      return state;  
  }
} 