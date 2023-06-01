import { ADDED, CLEARALL, COLORCHANGER, COMPLETEDALL, DELETED, TOGGLED } from "./actionTypes";
import { initalState } from "./initialState"

const nextTodoId = (todos: any) => {
    const maxId = todos.reduce((maxId: number, todo: any) => Math.max(todo.id, maxId) - 1)
    return maxId + 1;
}
const reducer = (state = initalState, action: any) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state)
                }

            ]

        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                } return {
                    ...todo,
                    completed: !todo.completed
                }
            })

        case COLORCHANGER:
            const { todoId, color } = action.payload;
            return state.map((todo) => {
                if (todo.id !== todoId) {
                    return todo;
                } return {
                    ...todo,
                    color: color
                }
            })

        case DELETED:
            return state.filter(todo => todo.id !== action.payload)

        case COMPLETEDALL:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })

        case CLEARALL:
            return state.filter(todo => !todo.completed)

    }
}

export default reducer;