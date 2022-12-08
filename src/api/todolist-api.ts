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

type PostType = {
    resultCode: number
    messages: []
    data: {
        item: TodolistPropsType
    }
}


type updateType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

type deleteType = {
    resultCode: number
    messages: string[]
    data: {}
}

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        return instance.put<updateType>(`todo-lists/${todolistId}`, {title: title})
    },
    getTodolist() {
        return instance.get<TodolistPropsType[]>("todo-lists")
    },
    createTodolist(title: string) {
        return instance.post<PostType>("todo-lists", {title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<deleteType>(`todo-lists/${todolistId}`)
    }
}