import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "793a1f91-5101-4004-8cd6-6855280b721b"
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist()
            /*   axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)*/
            .then((res) => {
                console.log(res)
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        let title = 'Кринж'

        todolistAPI.createTodolist(title)
            /*axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: 'Кринж'}, settings)*/
            .then((res) => {
                console.log(res)
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        const todolistId = "1f81120f-ecb8-4869-877d-5cb32fbf51e9"
        todolistAPI.deleteTodolist(todolistId)
            // axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = "gggg"
        let todolistId = "9075cffc-3db4-492a-9f36-b5320fd53624"

        /*      axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: 'AAAAAAA'}, settings)*/
        todolistAPI.updateTodolist(todolistId, title).then((res) => {
            setState(res.data)
        })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

