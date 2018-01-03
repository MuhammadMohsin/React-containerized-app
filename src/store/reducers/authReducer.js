import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE
} from '../constants'
const initialState = {
    user: {},
    isLoading: false,
    isError: false,
    error: {},
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                user: {},
                isLoading: true,
                isError: false,
                error: {},
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        case SIGNIN:
            return {
                ...state,
                user: {},
                isLoading: true,
                isError: false,
                error: {},
            }
        case SIGNIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            }
        case SIGNIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        case LOGOUT:
            return {
                ...state,
                isLoading: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: {},
                isLoading: false,
                isError: false,
                error: {},
            }
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        default:
            return state
    }
}