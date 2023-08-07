import {combineReducers} from "redux"
import { userReducer } from "./userReducer"
import { toDoReducer } from "./toDoReducer"

export const rootReducer = combineReducers({
    user: userReducer,
    todo: toDoReducer,
})

export type RootState = ReturnType <typeof rootReducer>