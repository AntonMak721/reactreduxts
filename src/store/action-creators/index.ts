import * as UserActionCreators from './user'
import * as ToDoActionCreators from './toDo'

export default {
    ...ToDoActionCreators,
    ...UserActionCreators
}