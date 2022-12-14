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

type ResponseType<X = {}> = {
    resultCode: number
    messages: string[]
    data: X
}


export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type GetTasksResponse = {
    items: Array<TaskType>
    totalCount: number
    error: string | null
}


export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title: title})
    },
    getTodolist() {
        return instance.get<TodolistPropsType[]>("todo-lists")
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{item: TodolistPropsType}>>("todo-lists", {title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks${taskId}`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post<ResponseType<{item: TodolistPropsType}>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    updateTask(todolistId: string, title: string, taskId: string) {
        return instance.put<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks${taskId}`, {title: title})
    }
}