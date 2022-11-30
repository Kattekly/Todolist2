import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";

export default {
    title: 'Todolist/Task',
    component: Task,

    argTypes: {
        addItem: {
            description: 'Task add'
        }
    },
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = Template.bind({});


TaskIsDoneStory.args = {
    changeTaskStatus: action('changeTaskStatus'),
    changeTaskTitle: action('changeTaskTitle'),
    removeTask: action('removeTask'),
    task: {id: '1', isDone: true, title: 'CSS'},
    todolistId: 'todolistId1'
};

export const TaskIsNotDoneStory = Template.bind({});


TaskIsNotDoneStory.args = {
    changeTaskStatus: action('changeTaskStatus'),
    changeTaskTitle: action('changeTaskTitle'),
    removeTask: action('removeTask'),
    task: {id: '1', isDone: false, title: 'CSS'},
    todolistId: 'todolistId1'
};