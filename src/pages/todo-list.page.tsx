import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Grid, Paper } from "@mui/material";

import { Todolist } from "@/components";
import { FilterEnum, TodoList } from "@/types/todolist/todolist.type";
import { AppRootState } from "@/store";
import { Tasks } from "@/types/task/tasks.type";

const TodoListPage: FC = () => {

  const todoLists = useSelector<AppRootState, TodoList[]>(state=> state.todolists);
  const tasks = useSelector<AppRootState, Tasks>(state=> state.tasks);

  return (
    <>
      {todoLists.map((todoList) => {
        let taskForTodolist = tasks[todoList.id];
        if (todoList.filter === FilterEnum.ACTIVE) {
          taskForTodolist = taskForTodolist.filter(
            (task) => !task.isDone
          );
        }
        if (todoList.filter === FilterEnum.COMPLETED) {
          taskForTodolist = taskForTodolist.filter(
            (task) => task.isDone
          );
        }
        return (
          <Grid item key={todoList.id}>
            <Paper>
              <Todolist
                todoListId={todoList.id}
                title={todoList.title}
                tasks={taskForTodolist}
                currentFilter={todoList.filter}
              />
            </Paper>
          </Grid>
        );
      })}
    </>
  );
};

export default TodoListPage;
