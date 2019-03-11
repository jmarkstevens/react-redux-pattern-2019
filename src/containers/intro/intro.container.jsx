import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { ChangeTitle } from '../../actions'
import IntroComponent from '../../components/intro'
import { titleSelector } from '../../selectors'

class IntroContainer extends React.Component {
  handleChangeTitle = () => {
    const { changeTitle } = this.props
    const newTitle = `Title reset at ${new Date().toLocaleTimeString()}`
    changeTitle(newTitle)
  }

  render() {
    const { IntroTitle } = this.props
    return (
      <IntroComponent changeTitle={this.handleChangeTitle} title={IntroTitle} />
    )
  }
}

IntroContainer.defaultProps = {
  IntroTitle: 'empty'
}

IntroContainer.propTypes = {
  changeTitle: PropTypes.func.isRequired,
  IntroTitle: PropTypes.string
}

const mapStateToProps = state => ({
  IntroTitle: titleSelector(state)
})

const mapDispatchToProps = dispatch => {
  return {
    changeTitle: newTitle => {
      dispatch(ChangeTitle(newTitle))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroContainer)
