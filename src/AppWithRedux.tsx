import React from 'react';
import {Todolist} from "./Todolist";
import {AddItemForm} from "./AddItemForm";
import {AppBar, IconButton, Toolbar, Typography, Button, Container, Grid, Paper} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodolistAC,
    removeTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "./state/store";

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

function AppWithRedux() {

    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)

    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useDispatch();

    //---functions for working with Tasks data---
    //deleting a task
    function removeTask(id: string, todolistId: string) {
        dispatch(removeTaskAC(id, todolistId));
    }

    //adding a task
    function addTask(title: string, todolistId: string) {
        dispatch(addTaskAC(title, todolistId));
    }

    //change of status
    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        dispatch(changeTaskStatusAC(id, isDone, todolistId));
    }

    function changeTaskTitle(value: string, todolistId: string, id: string) {
        dispatch(changeTaskTitleAC(value, todolistId, id))
    }

    //---end---

    //---functions for working with Todolists data---
    function changeTodolistTitle(id: string, title: string) {
        const action = changeTodolistTitleAC(id, title);
        dispatch(action);
    }

    //filter change
    function changeFilter(todolistId: string, value: FilterValuesType) {
        const  action = changeTodolistFilterAC(todolistId, value);
        dispatch(action);
    }

    function removeTodolist(id: string) {
        const action = removeTodolistAC(id);
        dispatch(action);
    }

    function addTodolist(title: string) {
        const action = addTodolistAC(title);
        dispatch(action);
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

export default AppWithRedux;
