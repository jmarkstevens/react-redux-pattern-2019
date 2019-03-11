import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import AppStore from './App.Store'
import IntroContainer from './containers/intro'

ReactDom.render(
  <Provider store={AppStore}>
    <IntroContainer />
  </Provider>,
  document.getElementById('app')
)
