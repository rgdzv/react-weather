import axios from 'axios'
import { GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from '../action-types/action-types'

const APIKEY = ''  // You need to put your APIKEY here as a string!

export const getWeather = (location) => {
  return (dispatch) => {
    dispatch(getWeatherRequest())
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIKEY}`)
      .then((res) => {
        const weather = res.data
        dispatch(getWeatherSuccess(weather))
      })
      .catch((err) => {
        dispatch(getWeatherFailure(err.message))
      })
  }
}

const getWeatherRequest = () => ({
  type: GET_WEATHER_REQUEST,
})

const getWeatherSuccess = (weather) => ({
  type: GET_WEATHER_SUCCESS,
  weather,
})

const getWeatherFailure = (error) => ({
  type: GET_WEATHER_FAILURE,
  error,
})