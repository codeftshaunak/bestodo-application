import { ADDED, CLEARALL, COLORCHANGER, COMPLETEDALL, DELETED, TOGGLED } from './actionTypes';

export const added = (todoText: string) => {
    return {
        type: ADDED,
        payload: todoText
    }
}

export const toggled = (todoId: number) => {
    return {
        type: TOGGLED,
        payload: todoId
    }
}

export const colorchanger = (todoId: number, color: string) => {
    return {
        type: COLORCHANGER,
        paylodad: {
            todoId,
            color
        }
    }
}

export const deleted = (todoId: number) => {
    return {
        type: DELETED,
        payload: todoId
    }
}

export const completedall = () => {
    return {
        type: COMPLETEDALL
    }
}

export const clearall = () => {
    return {
        type: CLEARALL
    }
}
