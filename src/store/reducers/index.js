import { combineReducers } from 'redux'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    AuthReducer: authReducer
})

export default rootReducer