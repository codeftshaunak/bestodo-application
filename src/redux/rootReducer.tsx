import todorReducer from "./todos/reducer";
import filterReducer from "./filters/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: todorReducer,
    filters: filterReducer
})


export default rootReducer;