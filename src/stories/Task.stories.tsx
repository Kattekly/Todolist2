import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";

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