import { ADDED, CLEARALL, COLORCHANGER, COMPLETEDALL, DELETED, TOGGLED } from "./actionTypes";
import initalState from "./initialState";

type Todo = {
    id: number;
    completed: boolean;
    color: string;
};

const nextTodoId = (todos: Todo[]) => {
    const maxId = todos.reduce((maxId: number, todo: Todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};

const reducer = (state = initalState, action: any) => {
    switch (action.type) {

        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false
                },
            ];

        case TOGGLED:
            return state.map((todo: Todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            });

        case COLORCHANGER:
            console.log(action.payload);
            const { todoId, color } = action.payload;
            return state.map((todo: Todo) => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    color: color,
                };
            });

        case DELETED:
            return state.filter((todo: Todo) => todo.id !== action.payload);

        case COMPLETEDALL:
            return state.map((todo: Todo) => {
                return {
                    ...todo,
                    completed: true,
                };
            });

        case CLEARALL:
            return state.filter((todo: Todo) => !todo.completed);

        default:
            return state;
    }
};

export default reducer;
