import { combineReducers } from 'redux'
import counterReducer from './counter'


const rootReducer = combineReducers({
  counters: counterReducer
})

export default rootReducer