import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import CombinedState from './reducers'

const middleware = [thunkMiddleware]

const useLogger = 0
if (useLogger) middleware.push(logger)

const store = createStore(CombinedState, applyMiddleware(...middleware))

export default store
