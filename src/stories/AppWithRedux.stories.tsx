import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppWithRedux from "../AppWithRedux";
import ReduxStoreProviderDecorator from "./ReduxStoreProviderDecorator";


export default {
    title: 'Example/AppWithRedux',
    component: AppWithRedux,

    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof AppWithRedux>;


const Template: ComponentStory<typeof AppWithRedux> = (args) => <AppWithRedux/>

export const AppWithReduxStory = Template.bind({});

