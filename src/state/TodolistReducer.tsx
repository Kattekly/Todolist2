import {TodolistType} from "../App";

type ActionsType = removeTodolistACType

type removeTodolistACType= ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (id: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
            id: id
        }
    } as const
}

export const TodolistReducer = (state: Array<TodolistType>, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
return state.filter(tl => tl.id != action.payload.id)
        }
        default: return state
    }
}