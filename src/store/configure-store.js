import { createStore, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => action.type !== 'TBD'
})

let middleware = []
if (process.env.NODE_ENV !== 'production') {
  middleware = [loggerMiddleware]
}

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleWare,
      ...middleware
    )
  )
}
