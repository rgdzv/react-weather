import React from 'react'
import './Field.scss'
import PropTypes from 'prop-types'

const Field = ({ type, className, value, onChange, id, onKeyPress }) => {
  return (
    <>
      <input 
        type={type} 
        className={className} 
        id={id}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <label 
        htmlFor="input" 
        className="weather__location"
      >
        Location
      </label>
    </>
  )
}

Field.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  onKeyPress: PropTypes.func
}

Field.defaultProps = {
  type: '',
  className: '',
  value: '',
  onChange: () => {},
  id: '',
  onKeyPress: () => {}
}

export default Field
