import React from 'react'

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

export default IntroComponent
