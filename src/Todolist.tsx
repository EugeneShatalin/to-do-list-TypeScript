import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, LocalStateType} from "./App";

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

    let [title, setTitle] = useState("");
    let [error, setError] = useState<string | null>(null);
    //functions Todolist
    //adding a task
    const addTask = () => {
        if (title.trim() != "") {
            props.addTask(title, props.id);
            setTitle("");
        } else {
            setError("Title is required");
        }

    }
    //Processing the input value in the "input"
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    //
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }
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
    return (<div>
            <h3>{props.title}  <button onClick={() => props.removeTodolist(props.id)}>x</button></h3>
            
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? "error" : ""}
                />
                <button onClick={addTask}>+</button>

                {error && <div className="error-message">{error}</div>}
            </div>
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
