import React, {ChangeEvent} from 'react';
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type PropsType = {
    key: string
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, id: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    //Return functions for filtering
    const onClickAllHandler = () => {
        props.changeFilter("all", props.id)
    }
    const onClickActiveHandler = () => {
        props.changeFilter("active", props.id)
    }
    const onClickCompletedHandler = () => {
        props.changeFilter("completed", props.id)
    }
    //end

    const addTask = (title: string) => {
        props.addTask (title, props.id)
    }

    return (<div>
            <h3>{props.title}
                <button onClick={() => props.removeTodolist(props.id)}>x</button>
            </h3>

            <AddItemForm addItem = {addTask}/>

            <ul>
                {props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id, props.id);
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDonevalue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDonevalue, props.id);
                    }

                    return <li key={t.id}
                               className={t.isDone ? "is-done" : ""}
                    >
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })}
            </ul>
            <div>
                <button
                    className={props.filter === "all" ? "active-filter" : ""}
                    onClick={onClickAllHandler}
                >All
                </button>
                <button
                    className={props.filter === "active" ? "active-filter" : ""}
                    onClick={onClickActiveHandler}
                >Active
                </button>
                <button
                    className={props.filter === "completed" ? "active-filter" : ""}
                    onClick={onClickCompletedHandler}>Completed
                </button>
            </div>
        </div>
    );
}

