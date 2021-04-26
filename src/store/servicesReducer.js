import axios from 'axios';

const SERVICES_ERROR = 'SERVICES_ERROR';
const SERVICES_LOADING = 'SERVICES_LOADING';
const SERVICES_CREATED = 'SERVICES_CREATED';
const SERVICES_SUCCESS = 'SERVICES_SUCCESS';
const SERVICES_UPDATED = 'SERVICES_UPDATED';
const SERVICES_FINISHED = 'SERVICES_FINISHED';
const SERVICES_DELETE_ERROR = 'SERVICES_DELETE_ERROR';

export function getServices(query='') {
  return async function (dispatch) {
    dispatch({ type: SERVICES_LOADING });
    try {
      const token = localStorage.getItem('token');

      const { data: { services, userID } } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/services?${query}`,
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

export function createService( initLoc, finalLoc, date, bikeID, towID ) {
  return async function (dispatch) {
    dispatch({ type: SERVICES_LOADING });
    try {
      const token = localStorage.getItem('token');

      const { data: { service } } = await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/services',
        data: {
          initLoc,
          finalLoc,
          date,
          bikeID,
          towID,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: SERVICES_CREATED, payload: service });
    } catch (error) {
      dispatch({ type: SERVICES_ERROR, payload: error });
    } finally {
      dispatch({ type: SERVICES_FINISHED});
    }
  };
}

export function updateService ( serviceID, dataUpdate, updatedServiceIndex ) {
  return async function (dispatch) {
    dispatch({ type: SERVICES_LOADING });
    try {
      const token = localStorage.getItem('token');
      
      const { data: { service } } = await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/services/${serviceID}`,
        data: dataUpdate,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: SERVICES_UPDATED, payload: service, updatedServiceIndex });
    } catch (error) {
      dispatch({ type: SERVICES_ERROR, payload: error });
    } finally {
      dispatch({ type: SERVICES_FINISHED });
    }
  };
}

export function deleteError() {
  return {
    type: SERVICES_DELETE_ERROR,
  }
}

const initialState = {
  loading: false,
  services: [],
  servicesHistory: [],
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
      let uncompletedServices = [];
      let completedServices = [];
      action.payload[0].forEach((service) => {
        service.servStat === 'Calificado' ? 
          completedServices.push(service)
          :
          uncompletedServices.push(service);
      });
      return {
        ...state,
        services: uncompletedServices,
        servicesHistory: completedServices,
        userID: action.payload[1],
      };
    case SERVICES_ERROR:
      return {
        ...state,
        errorServices: action.payload,
      };
    case SERVICES_CREATED:
      return {
        ...state,
        services: [...state.services, action.payload],
      };
    case SERVICES_UPDATED:
      let wasServiceRated = action.payload.servStat === 'Calificado';

      return {
        ...state,
        servicesHistory: wasServiceRated ? 
          [ ...state.servicesHistory, action.payload ] 
          : 
          [ ...state.servicesHistory ],
        services: state.services.map((service, index) => {
          return (
            index === action.updatedServiceIndex ? 
            action.payload :
            service
          )
        }), 
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
