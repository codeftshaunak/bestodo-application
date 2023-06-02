import todorReducer from "./todos/reducer";
import filterReducer from "./filters/reducer";
import { AnyAction, combineReducers } from "redux";
import { Reducer } from "react";


const rootReducer = combineReducers({
    todos: todorReducer,
    filters: filterReducer
})



export default rootReducer;