import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

const IntroContainer = props => {
  const { allState } = props
  // eslint-disable-next-line no-console
  console.log('IntroContainer allState:', allState)
  return <div />
}

IntroContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  allState: PropTypes.any.isRequired
}
const mapStateToProps = state => ({
  allState: state
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroContainer)
