export interface ToDoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum ToDoActionTypes {
    FETCH_TODO="FETCH_TODO",
    FETCH_TODO_SUCCESS="FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR="FETCH_TODO_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface FetchToDoAction {
    type: ToDoActionTypes.FETCH_TODO;

}
interface FetchToDoSuccessAction {
    type: ToDoActionTypes.FETCH_TODO_SUCCESS;
    payload: any[];
}
interface FetchToDoErrorAction {
    type: ToDoActionTypes.FETCH_TODO_ERROR;
    payload: string;
}
interface SetToDoPage {
    type: ToDoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type ToDoAction = 
FetchToDoAction 
| FetchToDoSuccessAction 
| FetchToDoErrorAction 
| SetToDoPage