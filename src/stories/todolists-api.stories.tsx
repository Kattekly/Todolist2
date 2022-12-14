import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist()
            .then((res) => {
                console.log(res)
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todoTitle, setTodoTitle] = useState<any>(null)


    const createTodolistTitle = () => {
        todolistAPI.createTodolist(todoTitle)

            .then((res) => {
                console.log(res)
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'todolistTitle'} value={todoTitle} onChange={(e) => {
                setTodoTitle(e.currentTarget.value)
            }}/>
            <button onClick={createTodolistTitle}>create todolist</button>
        </div>

    </div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>("")

    const deleteTodolist = () => {
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <input placeholder={'todolistId'} value={todolistId} onChange={(e) => {
            setTodolistId(e.currentTarget.value)
        }}/>
        <button onClick={deleteTodolist}>delete todolist</button>
    </div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>("")
    const [todolistTitle, setTodolistTitle] = useState<any>("")


    const updateTodolistTitle = () => {
        todolistAPI.updateTodolist(todolistId, todolistTitle).then((res) => {
            setState(res.data)
        })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={'newTodolistTitle'} value={todolistTitle} onChange={(e) => {
                setTodolistTitle(e.currentTarget.value)
            }}/>
            <button onClick={updateTodolistTitle}>update todolist</button>
        </div>
    </div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>("")

    const getTaskTodo = () => {
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                console.log(res)
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <input placeholder={'todolistId'} value={todolistId} onChange={(e) => {
            setTodolistId(e.currentTarget.value)
        }}/>
        <button onClick={getTaskTodo}>get task</button>
    </div>
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
    const [todolistId, setTodolistId] = useState<any>("")
    const [taskTitle, setTaskTitle] = useState<any>("")

    const createTaskTodo = () => {
        todolistAPI.createTask(todolistId, taskTitle)
            .then((res) => {
                console.log(res)
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={'taskTitle'} value={taskTitle} onChange={(e) => {
                setTaskTitle(e.currentTarget.value)
            }}/>
            <button onClick={createTaskTodo}>create task</button>
        </div>
    </div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<any>("")
    const [todolistId, setTodolistId] = useState<any>("")
    const [taskTitle, setTaskTitle] = useState<any>("")
    const [taskDescription, setTaskDescription] = useState<any>("")
    const [status, setStatus] = useState<any>(0)
    const [priority, setPriority] = useState<any>(0)
    const [startDate, setStartDate] = useState<any>("")
    const [deadline, setDeadline] = useState<any>("")

    const updateTask = () => {
        todolistAPI.updateTask(todolistId, taskId, {
            deadline: null,
            description: taskDescription,
            priority: priority,
            startDate: null,
            status: status,
            title: taskTitle
        }).then((res) => {
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
            <input placeholder={'Task Title'} value={taskTitle} onChange={(e) => {
                setTaskTitle(e.currentTarget.value)
            }}/>
            <input placeholder={'Description'} value={taskDescription} onChange={(e) => {
                setTaskDescription(e.currentTarget.value)
            }}/>
            <input placeholder={'Status'} value={status} onChange={(e) => {
                setStatus(e.currentTarget.value)
            }}/>
            <input placeholder={'Priority'} value={priority} onChange={(e) => {
                setPriority(e.currentTarget.value)
            }}/>
            <input placeholder={'startDate'} value={startDate} onChange={(e) => {
                setStartDate(e.currentTarget.value)
            }}/>
            <input placeholder={'deadline'} value={deadline} onChange={(e) => {
                setDeadline(e.currentTarget.value)
            }}/>
            <button onClick={updateTask}>update task</button>
        </div>
    </div>
}