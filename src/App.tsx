import React, { useState } from "react";
import { v1 } from "uuid";
import { Container, Grid } from "@mui/material";
import "@/App.css";

import { Tasks, Todo } from "@/components/todo-list";
import { AddItemForm } from "@/components";
import TodoListPage from "./pages/todo-list.page";
import Header from "@/components/mui/header";

function App() {
  const todolistId1 = v1();
  const todolistId2 = v1();

  const [todolists, setTodolist] = useState<Todo[]>([
    { id: todolistId1, title: "What to learn", filter: "all" },
    { id: todolistId2, title: "What to buy", filter: "all" },
  ]);
  const [tasks, setTasks] = useState<Tasks>({
    [todolistId1]: [
      { id: v1(), task: "CSS", isDone: true },
      { id: v1(), task: "HTML", isDone: true },
      { id: v1(), task: "JS", isDone: true },
      { id: v1(), task: "React", isDone: true },
      { id: v1(), task: "Vue", isDone: true },
    ],
    [todolistId2]: [
      { id: v1(), task: "Book", isDone: false },
      { id: v1(), task: "Milk", isDone: true },
    ],
  });

  const addTodoList = (title: string) => {
    const newTodo: Todo = { id: v1(), title, filter: "all" };
    setTodolist((prev) => [...prev, newTodo]);
    setTasks((prev) => ({ ...prev, [newTodo.id]: [] }));
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
            todolists={todolists}
            tasks={tasks}
            changeTasks={setTasks}
            changeTodolist={setTodolist}
          />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
