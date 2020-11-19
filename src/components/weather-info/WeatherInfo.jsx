import React, { memo } from 'react'
import WeatherAddInfo from '../weather-additional/WeatherAddInfo'
import './WeatherInfo.scss'
import PropTypes from 'prop-types'

const WeatherInfo = ({ weather }) => {
  return (
    <>
      {weather.main !== undefined
        ? 
          (
            <>
              <div className="weather__city">{weather.name}, {weather.sys.country}</div>
              <div className="weather__date">{new Date().toDateString()}</div>
              <div className="weather__deg">{Math.round(weather.main.temp)}°c</div>
              <div className="weather__name">{weather.weather[0].main}</div>
              <div className="weather__add__info">
                <WeatherAddInfo 
                  name="Pressure"
                  number={Math.round(weather.main.pressure * 0.75)}
                  unit="mm Hg"
                />
                <WeatherAddInfo 
                  name="Wind"
                  number={weather.wind.speed}
                  unit="m/s"
                />
                <WeatherAddInfo 
                  name="Humidity"
                  number={weather.main.humidity}
                  unit="%"
                />
              </div>
            </>
          )
        : <div className="main__logo">React Weather</div>
      }
    </>
  )
}

WeatherInfo.propTypes = {
  weather: PropTypes.object
}

WeatherInfo.defaultProps = {
  weather: {}
}

export default memo(WeatherInfo)
