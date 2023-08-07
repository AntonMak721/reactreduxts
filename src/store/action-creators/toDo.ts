import { Dispatch } from "redux"
import axios from "axios"
import { ToDoAction, ToDoActionTypes } from "../../types/toDo"

export const fetchToDo = (page = 1, limit = 10)=>{
    return async (dispatch: Dispatch<ToDoAction>) => {
        try {
            dispatch({type: ToDoActionTypes.FETCH_TODO})  
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() =>{
                dispatch({type: ToDoActionTypes.FETCH_TODO_SUCCESS, payload: response.data})
            }, 500)
           
        } catch (e) {
            dispatch({
                type: ToDoActionTypes.FETCH_TODO_ERROR,
                payload: 'Произошла ошибка'
            })  
        }

    }
}


export function setToDoPage (page: number):ToDoAction {
    return { type: ToDoActionTypes.SET_TODO_PAGE, payload: page}
}