import { COLORCHANGE, STATUSCHANGE } from "./actionTypes"

export const colorChange = (color: string, changeType: string) => {
    return {
        type: COLORCHANGE,
        payload: {
            color,
            changeType
        }
    }
}

export const statusChange = (status: string) => {
    return {
        type: STATUSCHANGE,
        payload: status
    }
}