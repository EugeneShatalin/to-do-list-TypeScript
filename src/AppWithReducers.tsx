import React, {useReducer, useState} from 'react';
import {Todolist} from "./Todolist";
import {v1} from 'uuid';
import {AddItemForm} from "./AddItemForm";
import {AppBar, IconButton, Toolbar, Typography, Button, Container, Grid, Paper} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    todolistsReducer,
    addTodolistAC,
    removeTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithReducers() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, dispatchToTodolist] = useReducer(todolistsReducer, [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to byu", filter: "all"}
    ]);

    let [tasks, dispatchToTasks] = useReducer(tasksReducer, {
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React book", isDone: true},
        ],
    })

    //---functions for working with Tasks data---
    //deleting a task
    function removeTask(id: string, todolistId: string) {
        dispatchToTasks(removeTaskAC(id, todolistId));
    }

    //adding a task
    function addTask(title: string, todolistId: string) {
        dispatchToTasks(addTaskAC(title, todolistId));
    }

    //change of status
    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        dispatchToTasks(changeTaskStatusAC(id, isDone, todolistId));
    }

    function changeTaskTitle(value: string, todolistId: string, id: string) {
        dispatchToTasks(changeTaskTitleAC(value, todolistId, id))
    }

    //---end---

    //---functions for working with Todolists data---
    function changeTodolistTitle(id: string, title: string) {
        const action = changeTodolistTitleAC(id, title);
        dispatchToTodolist(action);
    }

    //filter change
    function changeFilter(todolistId: string, value: FilterValuesType) {
        const  action = changeTodolistFilterAC(todolistId, value);
        dispatchToTodolist(action);
    }

    function removeTodolist(id: string) {
        const action = removeTodolistAC(id);
        dispatchToTodolist(action);
    }

    function addTodolist(title: string) {
        const action = addTodolistAC(title);
        dispatchToTodolist(action);
        dispatchToTasks(action)
    }

    //---end---

    return (
        < div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "20px"}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];
                            let tasksForTodolist = allTodolistTasks;

                            if (tl.filter === "active") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false)
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true)
                            }

                            return <Grid item>
                                <Paper style={{padding: "10px"}}>
                                    <Todolist key={tl.id}
                                              id={tl.id}
                                              title={tl.title}
                                              tasks={tasksForTodolist}
                                              removeTask={removeTask}
                                              changeFilter={changeFilter}
                                              addTask={addTask}
                                              changeTaskStatus={changeStatus}
                                              removeTodolist={removeTodolist}
                                              newTitleTask={changeTaskTitle}
                                              newTitleTodolist={changeTodolistTitle}
                                              filter={tl.filter}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithReducers;
