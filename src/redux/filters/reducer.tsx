import { COLORCHANGE, STATUSCHANGE } from "./actionTypes"
import initialState from "./initialState"

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case STATUSCHANGE:
            return {
                ...state,
                status: action.payload
            }

        case COLORCHANGE:
            const { color, changeType } = action.payload;
            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [
                            ...state[0].colors,
                            color
                        ]
                    }
                case 'remove':
                    return {
                        ...state,
                        colors: state[0].colors.filter(existingColor => existingColor !== color)
                    }

                default:
                    return state
            }
        default:
            return state
    }

}

export default reducer;