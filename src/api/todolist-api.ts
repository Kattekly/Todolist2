import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '793a1f91-5101-4004-8cd6-6855280b721b',
    },
})


type TodolistPropsType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<X> = {
    resultCode: number
    messages: string[]
    data: X
}


export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`, {title: title})
    },
    getTodolist() {
        return instance.get<TodolistPropsType[]>("todo-lists")
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{item: TodolistPropsType}>>("todo-lists", {title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
    },
    getTasks(todolistId: string) {
        return instance.get<TodolistPropsType[]>(`todo-lists/${todolistId}/tasks`)
    }
}