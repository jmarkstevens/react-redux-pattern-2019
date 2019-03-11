import React from 'react'
import PropTypes from 'prop-types'

import { Button, Container, Title } from './intro.styled'

const IntroComponent = ({ changeTitle, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Button onClick={changeTitle} type="button">
        Change title
      </Button>
    </Container>
  )
}

IntroComponent.propTypes = {
  changeTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default IntroComponent
