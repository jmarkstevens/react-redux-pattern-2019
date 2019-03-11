import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import AppState from './reducers'

const middleware = [thunkMiddleware]

const useLogger = 1
if (useLogger) middleware.push(logger)

const store = createStore(AppState, applyMiddleware(...middleware))

export default store
