import { useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import Field from './components/field/Field'
import WeatherInfo from './components/weather-info/WeatherInfo'
import { getWeather } from './redux/actions/actions'
import preloader from './img/preloader.gif'
import classNames from 'classnames'

const App = () => {

  const [location, setLocation] = useState('')
  const { loading, weather, error } = useSelector(({ weather }) => weather)
  const dispatch = useDispatch()

  const handleSetLocation = ({ target : { value } }) => {
    setLocation(value)
  }

  const getWeatherInfo = ({ key }) => {
    if (key === 'Enter') {
      dispatch(getWeather(location))
      setLocation('')
    }
  }
  const backgroundClass = weather.weather === undefined 
    ? 'weather__content' 
    : classNames('weather__content', {
        'clouds': weather.weather[0].main === 'Clouds',
        'clear': weather.weather[0].main === 'Clear',
        'mist': weather.weather[0].main === 'Mist',
        'fog': weather.weather[0].main === 'Fog',
        'rain': weather.weather[0].main === 'Rain',
        'thunderstorm': weather.weather[0].main === 'Thunderstorm',
        'drizzle': weather.weather[0].main === 'Drizzle',
        'snow': weather.weather[0].main === 'Snow',
      })

  return (
    <div className={backgroundClass}>
      <Container fluid style={{ padding: '15px' }}>
        <Row>
          <Col align="center">
            <Field
              type="text"
              className="weather__input"
              id="input"
              value={location}
              onChange={handleSetLocation}
              onKeyPress={getWeatherInfo}
            />
          </Col>
        </Row>
        <Row>
          <Col align="center">
            {loading 
              ? <img src={preloader} alt="preloader"/>
              : error
              ? <div className="error">{error}</div>
              : <WeatherInfo weather={weather}/>
            }
          </Col>
        </Row> 
      </Container>
    </div>
  )
}

export default App


