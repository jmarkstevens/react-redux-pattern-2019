import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import IntroComponent from '../../components/intro'
import { titleSelector } from '../../selectors'

const IntroContainer = props => {
  const { IntroTitle } = props
  return <IntroComponent IntroTitle={IntroTitle} />
}

IntroContainer.defaultProps = {
  IntroTitle: 'empty'
}

IntroContainer.propTypes = {
  IntroTitle: PropTypes.string
}

const mapStateToProps = state => ({
  IntroTitle: titleSelector(state)
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroContainer)
