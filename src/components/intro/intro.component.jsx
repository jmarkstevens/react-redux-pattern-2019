import React from 'react'
import PropTypes from 'prop-types'

const IntroComponent = ({ changeTitle, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={changeTitle} type="button">
        Change title
      </button>
    </div>
  )
}

IntroComponent.propTypes = {
  changeTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default IntroComponent
