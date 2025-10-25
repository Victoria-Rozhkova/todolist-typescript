import React, { useReducer } from "react";
import { v1 } from "uuid";
import { Container, Grid } from "@mui/material";
import "@/App.css";

import { AddItemForm } from "@/components";
import TodoListPage from "@/pages/todo-list.page";
import Header from "@/components/mui/header";
import { FilterEnum } from "@/types/todolist/todolist.type";
import { todoListsReducer } from "@/store/todolists-reducer";
import { tasksReducer } from "@/store/tasks-reducer";
import { addTodoListActionCreator } from "@/store/todolists-action-creators";

function App() {
  const todoListId1 = v1();
  const todoListId2 = v1();

  const [todoLists, dispatchTodolists] = useReducer(todoListsReducer,[
    { id: todoListId1, title: "What to learn", filter: FilterEnum.ALL },
    { id: todoListId2, title: "What to buy", filter: FilterEnum.ALL },
  ]);

  const [tasks, dispatchTasks] = useReducer(tasksReducer,{
    [todoListId1]: [
      { id: v1(), task: "CSS", isDone: true },
      { id: v1(), task: "HTML", isDone: true },
      { id: v1(), task: "JS", isDone: true },
      { id: v1(), task: "React", isDone: true },
      { id: v1(), task: "Vue", isDone: true },
    ],
    [todoListId2]: [
      { id: v1(), task: "Book", isDone: false },
      { id: v1(), task: "Milk", isDone: true },
    ],
  });

  const addTodoList = (title: string) => {
    const action = addTodoListActionCreator(title)
    dispatchTodolists(action)
    dispatchTasks(action)
  };

  return (
      <div className="App">
        <Header />
        <Container fixed>
          <Grid container>
            <div className="py-[20px]">
              <AddItemForm placeholder="New todo list" onSubmit={addTodoList} />
            </div>
          </Grid>
          <Grid container spacing={3}>
            <TodoListPage
                todoLists={todoLists}
                tasks={tasks}
                changeTasks={dispatchTasks}
                changeTodoList={dispatchTodolists}
            />
          </Grid>
        </Container>
      </div>
  );
}

export default App;
