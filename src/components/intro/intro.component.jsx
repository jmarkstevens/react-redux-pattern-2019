import React from 'react'
import PropTypes from 'prop-types'

const IntroComponent = ({ IntroTitle }) => {
  return (
    <div>
      {IntroTitle}
    </div>
  )
}

IntroComponent.propTypes = {
  IntroTitle: PropTypes.string.isRequired,
}

export default IntroComponent
