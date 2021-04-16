import axios from 'axios'

const USERS_LOADING = 'USERS_LOADING';
const USERS_SUCCESS = 'USERS_SUCCESS';
const USERS_ERROR = 'USERS_ERROR';
const USERS_DELETE_ERROR = 'USERS_DELETE_ERROR'

export function registerUser(firstName, lastName, email, phoneNum, password, userTypeForm) {
  return async function(dispatch) {
    try{
      dispatch({ type: USERS_LOADING })
      const { data: { token, userFront } } = await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/${userTypeForm}s/signup`,
        data: {
          name: `${firstName} ${lastName}`,
          email,
          phoneNum,
          password,
        }
      });
      localStorage.setItem('token', token)
      dispatch({ type: USERS_SUCCESS, payload: {userFront, userType: userTypeForm} })
    } catch(error) {
      dispatch({ type: USERS_ERROR, payload: error })
    }
  }
}

export function getLoggedUser() {
  return async function(dispatch) {
    dispatch({ type: USERS_LOADING })
    try{
      const token = localStorage.getItem('token')

      const { data: { userType, userFront } } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/users',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      localStorage.setItem('token', token)
      dispatch({ type: USERS_SUCCESS, payload: {userFront, userType} })
    } catch(error) {
      dispatch({ type: USERS_ERROR, payload: error })
    }
  }
}

export function loginUser( email, password, history) {
  return async function(dispatch) {
    dispatch({ type: USERS_LOADING })
    try{
      const { data: { token, userType, userFront } } = await axios({
            method: 'POST',
            baseURL: process.env.REACT_APP_SERVER_URL,
            url: '/users/signin',
            data: {
              email,
              password,
            }
        
      });
      localStorage.setItem('token', token)

      !userFront.emailIsConfirmed ? history.push('/userInfo') :
        userType === 'client' ? 
          history.push('/listmotorcycle') 
          : 
          history.push('/listtow');

      dispatch({ type: USERS_SUCCESS, payload: {userFront, userType } })
    } catch(error) {
      dispatch({ type: USERS_ERROR, payload: error })
    }
  }
}

export function deleteError(){
  return {
    type: USERS_DELETE_ERROR,
  }
}

const initialState = {
  userFront: {},
  userType: '',
  loading: false,
  errorUsers: null,
}

export function usersReducer(state = initialState, action) {
  switch(action.type) {
    case USERS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case USERS_ERROR:
      return {
        ...state,
        loading: false,
        errorUsers: action.payload,
      }
    case USERS_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        errorUsers: null,
      }
    default:
      return state;  
  }
}
