import React from 'react';
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";

export default {
    title: 'Task Stories',
    component: Task
}

const changeStatusCallback = action('Status changed inside Task');
const changeTitleCallback = action('Title changed inside Task');
const removeCallback = action('Remove Button inside Task clicked');

export const TaskBaseExample = (props: any) => {
    return (<>
            <Task
                task={{id: "1", title: "CSS", isDone: false}}
                changeTaskStatus={changeStatusCallback}
                changeTaskTitle={changeTitleCallback}
                removeTask={removeCallback}
                todolistId={'todolistId1'}
            />
            <Task
                task={{id: "2", title: "JS", isDone: true}}
                changeTaskStatus={changeStatusCallback}
                changeTaskTitle={changeTitleCallback}
                removeTask={removeCallback}
                todolistId={'todolistId2'}
            />
        </>

    )
}