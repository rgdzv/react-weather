import { GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from '../action-types/action-types'

const initialState = {
  loading: false,
  weather: {},
  error: null,
};

export const weatherReducer = (state = initialState, { type, weather, error }) => {
  switch (type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: weather
      };
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: error
      };
    default:
      return state;
  }
};