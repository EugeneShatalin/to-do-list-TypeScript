import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from 'uuid';
import {AddItemForm} from "./AddItemForm";

export type FilterValuesType = "all" | "active" | "completed";

type TodolistType = {
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

function App() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodoLists] = useState<Array<TodolistType>>([
        {
            id: todolistId1,
            title: "What to learn",
            filter: "all"
        },
        {
            id: todolistId2,
            title: "What to byu",
            filter: "all"
        }
    ]);

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React book", isDone: true},
            {id: v1(), title: "Bread", isDone: false},
        ],
    })

    //filter change
    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId);
        if (todolist) {
            todolist.filter = value;
            setTodoLists([...todolists])
        }
    }

    //deleting a task
    function removeTask(id: string, todolistId: string) {
        let todolistTasks = tasks[todolistId];
        tasks[todolistId] = todolistTasks.filter(t => t.id !== id);
        setTasks({...tasks});
    }

    //adding a task
    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false};

        let todolistTasks = tasks[todolistId];

        tasks[todolistId] = [task, ...todolistTasks];

        setTasks({...tasks});
    }

    //change of status
    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        let todolistTasks = tasks[todolistId]

        let task = todolistTasks.find(t => t.id === id);

        if (task) {
            task.isDone = isDone;
            setTasks({...tasks});
        }
    }

    function removeTodolist(id: string) {
        setTodoLists(todolists.filter(t => t.id != id));
        delete tasks[id];
        setTasks({...tasks});
    }

    function addTodolist(title: string) {
       let todolist: TodolistType = {
           id: v1(),
           title: title,
           filter: "all"
       };
        setTodoLists([todolist, ...todolists]);
        setTasks({...tasks,
       [todolist.id]: []});
    }

    return (
        <div className="App">
            <AddItemForm addItem={addTodolist} />
            {todolists.map(tl => {
                let allTodolistTasks = tasks[tl.id];
                let tasksForTodolist = allTodolistTasks;

                if (tl.filter === "active") {
                    tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false)
                }
                if (tl.filter === "completed") {
                    tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true)
                }

                return <Todolist key={tl.id}
                                 id={tl.id}
                                 title={tl.title}
                                 tasks={tasksForTodolist}
                                 removeTask={removeTask}
                                 changeFilter={changeFilter}
                                 addTask={addTask}
                                 changeTaskStatus={changeStatus}
                                 removeTodolist={removeTodolist}
                                 filter={tl.filter}
                />
            })
            }

        </div>
    );
}

export default App;
