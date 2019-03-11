const initState = {
  title: 'Intro redux pattern 1',
}

const IntroState = (state = initState, action) => {
  switch (action.type) {
    case 'GOT_DATA':
      return Object.assign({}, state, { data1: action.payload })
    default:
      return state
  }
}

export default IntroState
