import React, {ChangeEvent, useCallback, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {EditableSpan} from "../EditableSpan";
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

export default {
    title: 'Todolist/Task',
    component: Task,

    args: {
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask'),
        todolistId: 'todolistId1'
    },
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = Template.bind({});


TaskIsDoneStory.args = {
    task: {id: '1', isDone: true, title: 'CSS'},
};

export const TaskIsNotDoneStory = Template.bind({});


TaskIsNotDoneStory.args = {
    task: {id: '2', isDone: false, title: 'HTML'},
};


/*
const TemplateWork: ComponentStory<typeof Task> = (args) => {
const [task, setTask] = useState(args.task)

    const onClickHandler = () => args.removeTask('jj', "j")
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked
        setTask({...task, isDone: newIsDoneValue})
    }
    const onTitleChangeHandler = (newValue: string) => {
        setTask({...task, title: newValue})
    }

    return <div key={task.id} className={task.isDone ? 'is-done' : ''}>
        <Checkbox
            checked={task.isDone}
            color="primary"
            onChange={onChangeHandler }
        />

        <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
}

export const TaskWorkStory = Template.bind({
    removeTask: action('RemoveTask')
});*/
