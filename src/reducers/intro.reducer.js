import { CHANGE_TITLE } from '../actions'

const initState = {
  title: 'Intro redux pattern 1'
}

const IntroState = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return Object.assign({}, state, { title: action.payload })
    default:
      return state
  }
}

export default IntroState
