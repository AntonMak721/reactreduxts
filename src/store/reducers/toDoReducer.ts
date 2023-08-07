import { useActions } from "../../hooks/useActions";
import { ToDoAction, ToDoState, ToDoActionTypes } from "../../types/toDo";

const initialState: ToDoState = {
    todos: [],
    loading: false,
    error: null,
    limit: 10,
    page: 1
}


export const toDoReducer = (state = initialState, action: ToDoAction):ToDoState  => {
    switch (action.type) {
        case ToDoActionTypes.FETCH_TODO:
            return {...state, loading: true}
        case ToDoActionTypes.FETCH_TODO_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case ToDoActionTypes.FETCH_TODO_ERROR:
            return {...state, loading: false, error: action.payload}
        case ToDoActionTypes.SET_TODO_PAGE:
            return {...state, page:action.payload}

        default:
            return state
    }
}