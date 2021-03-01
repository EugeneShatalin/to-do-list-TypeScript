import React, {ChangeEvent} from 'react';
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {EditableSpan} from "./EditableSpan";

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
    newTitleTask: (value: string, todolistId: string, id: string) => void
    newTitleTodolist: (value: string, todolistId: string) => void
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
        props.addTask(title, props.id)
    }

    const onChange = (value: string) => {
        props.newTitleTodolist(value, props.id)
    }

    return (<div>
            <h3>
                <EditableSpan
                    value={props.title}
                    onChange={onChange}
                />
                {/*delete to-do list button*/}
                <IconButton onClick={() => props.removeTodolist(props.id)}>
                    <Delete/>
                </IconButton>
            </h3>

            <AddItemForm addItem={addTask}/>

            <div>
                {props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id, props.id);
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDonevalue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDonevalue, props.id);
                    };
                    const onChange = (value: string) => {
                        props.newTitleTask(value, props.id, t.id)
                    }


                    return <div key={t.id}
                               className={t.isDone ? "is-done" : ""}
                    >
                        <Checkbox
                            onChange={onChangeHandler}
                            checked={t.isDone}
                            color="primary"
                        />
                        <EditableSpan
                            value={t.title}
                            onChange={onChange}
                        />
                        {/*delete task button*/}
                        <IconButton onClick={onClickHandler}>
                            <Delete/>
                        </IconButton>
                    </div>
                })}
            </div>
            <div>
                <Button
                    onClick={onClickAllHandler}
                    color="default"
                    variant={props.filter === "all" ? "outlined" : "text"}
                >All
                </Button>
                <Button
                    onClick={onClickActiveHandler}
                    color="primary"
                    variant={props.filter === "active" ? "outlined" : "text"}
                >Active
                </Button>
                <Button
                    onClick={onClickCompletedHandler}
                    color="secondary"
                    variant={props.filter === "completed" ? "outlined" : "text"}
                >Completed
                </Button>
            </div>
        </div>
    );
}