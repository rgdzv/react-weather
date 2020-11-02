import './WeatherAddInfo.scss'
import React from 'react'
import PropTypes from 'prop-types'

const WeatherAddInfo = ({ name, number, unit }) => {
  return (
    <div className="weather__add__info__block">
      <div className="weather__add__info__name">{name}</div>
      <div className="weather__add__info__number">{number} {unit}</div>
    </div>
  )
}

WeatherAddInfo.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  unit: PropTypes.string
}

WeatherAddInfo.defaultProps = {
  name: '',
  number: 0,
  unit: ''
}

export default WeatherAddInfo
