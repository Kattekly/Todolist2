import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
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


        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}
        <input placeholder={'todolistId'} value={todolistId} onChange={(e) => {
            setTodolistId(e.currentTarget.value)
        }}/>
        <button onClick={deleteTodolist}>delete task</button>
    </div>
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

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'c2181829-204b-485d-b7e4-523d4d7c0001'
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                console.log(res)
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<any>("")
    const [todolistId, setTodolistId] = useState<any>("")


    const deleteTask = () => {
        todolistAPI.deleteTask(todolistId, taskId)

            .then((res) => {
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={'taskId'} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <button onClick={deleteTask}>delete task</button>
        </div>
    </div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        const todolistId = 'c2181829-204b-485d-b7e4-523d4d7c0001'
        let title = 'AAAAAAAAAA'

        todolistAPI.createTask(todolistId, title)
            .then((res) => {
                console.log(res)
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        let title = "DDDDDDDD"
        let todolistId = "c2181829-204b-485d-b7e4-523d4d7c0001"
        let model = {}

        todolistAPI.updateTask(todolistId, title, model).then((res) => {
            setState(res.data)
        })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}