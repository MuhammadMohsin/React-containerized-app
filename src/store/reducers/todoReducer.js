import {
    GET_TODOS_SUCCESS,
    ADD_TODO_SUCCESS,
    UPDATE_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
} from '../constants';
const initialState = {
    todos: [1,2,3],
    isLoading: false,
    isError: false,
    error: {},
}

let newTempTodos = [];

export default function todoReducer(state = initialState, action) {
    switch (action.type) {

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }

        case ADD_TODO_SUCCESS:
            newTempTodos = state.todos.slice();
            newTempTodos.push(action.payload);
            return {
                ...state,
                todos: newTempTodos,
                isLoading: false,
            }

        case UPDATE_TODO_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                isLoading: false,
            }

        case DELETE_TODO_SUCCESS:
            newTempTodos = state.todos.slice();
            newTempTodos.splice(action.payload.ind,1)
            return {
                ...state,
                todos: newTempTodos,
                isLoading: false,
            }
        default:
            return state
    }
}