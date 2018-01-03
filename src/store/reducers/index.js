import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    AuthReducer: authReducer,
    TodoReducer: todoReducer
})

export default rootReducer