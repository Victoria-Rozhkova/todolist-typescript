import React from "react";
import { useDispatch } from "react-redux";
import { Container, Grid } from "@mui/material";

import { AddItemForm } from "@/components";
import TodoListPage from "@/pages/todo-list.page";
import Header from "@/components/mui/header";
import { addTodoListActionCreator } from "@/store/todolists-action-creators";

import "@/App.css";

function App() {
  const dispatch = useDispatch();

  const addTodoList = (title: string) => {
    const action = addTodoListActionCreator(title)
    dispatch(action)
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
            <TodoListPage />
          </Grid>
        </Container>
      </div>
  );
}

export default App;
