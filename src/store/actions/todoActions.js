import {
    GET_TODOS_SUCCESS,
    ADD_TODO_SUCCESS,
    UPDATE_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
} from '../constants';

export default class TodoActions {

    static getTodosSuccess() {
        return {
            type: GET_TODOS_SUCCESS
        }
    }

    static addTodosSuccess(data) {
        return {
            type: ADD_TODO_SUCCESS,
            payload: data
        }
    }

    static updateTodosSuccess(data) {
        return {
            type: UPDATE_TODO_SUCCESS,
            payload: data
        }
    }

    static deleteTodosSuccess(data) {
        return {
            type: DELETE_TODO_SUCCESS,
            payload: {ind: data}
        }
    }
}