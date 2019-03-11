import React from 'react'
import PropTypes from 'prop-types'

const IntroComponent = ({ title }) => {
  return (
    <div>
      {title}
    </div>
  )
}

IntroComponent.propTypes = {
  title: PropTypes.string.isRequired,
}

export default IntroComponent
