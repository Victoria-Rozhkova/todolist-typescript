import React, { FC } from "react";
import { v1 } from "uuid";
import { Grid, Paper } from "@mui/material";

import { Todolist } from "@/components";
import { FilterValues, Task, Tasks, Todo } from "@/components/todo-list";

const TodoListPage: FC<{
  todolists: Todo[];
  tasks: Tasks;
  changeTasks: (tasks: Tasks) => void;
  changeTodolist: (todos: Todo[]) => void;
}> = ({ todolists, tasks, changeTasks, changeTodolist }) => {
  const removeTask = (id: string, todolistId: string) => {
    const filteredTasks = tasks[todolistId].filter((t) => t.id !== id);
    tasks[todolistId] = filteredTasks;
    changeTasks({ ...tasks });
  };

  const addTask = (task: string, todolistId: string) => {
    const newTask: Task = { id: v1(), task, isDone: false };
    const updatedTasks = [newTask, ...tasks[todolistId]];
    tasks[todolistId] = updatedTasks;
    changeTasks({ ...tasks });
  };

  const changeStatus = (
    taskId: string,
    isDone: boolean,
    todolistId: string
  ) => {
    const task = tasks[todolistId].find((taskItem) => taskItem.id === taskId);
    if (task) {
      task.isDone = isDone;
      changeTasks({ ...tasks });
    }
  };

  const removeTodoList = (id: string) => {
    const filteredTodos = todolists.filter((list) => list.id !== id);
    changeTodolist(filteredTodos);
    delete tasks[id];
    changeTasks({ ...tasks });
  };

  const changeFilter = (filter: FilterValues, todolistId: string) => {
    const todolist = todolists.find((todolist) => todolist.id === todolistId);
    if (todolist) {
      todolist.filter = filter;
      changeTodolist([...todolists]);
    }
  };

  const onEditTask = (value: string, taskId: string, todolistId: string) => {
    const task = tasks[todolistId].find((taskItem) => taskItem.id === taskId);
    if (task) {
      task.task = value;
      changeTasks({ ...tasks });
    }
  };

  const onEditHeading = (value: string, todolistId: string) => {
    const todolist = todolists.find((todolist) => todolist.id === todolistId);
    if (todolist) {
      todolist.title = value;
      changeTodolist([...todolists]);
    }
  };

  return (
    <>
      {todolists.map((todoList) => {
        let taskForTodolist = tasks[todoList.id];
        if (todoList.filter === "active") {
          taskForTodolist = taskForTodolist.filter(
            (task) => task.isDone === false
          );
        }
        if (todoList.filter === "completed") {
          taskForTodolist = taskForTodolist.filter(
            (task) => task.isDone === true
          );
        }
        return (
          <Grid item>
            <Paper>
              <Todolist
                todoListId={todoList.id}
                key={todoList.id}
                title={todoList.title}
                tasks={taskForTodolist}
                removeTask={removeTask}
                addTask={addTask}
                currentFilter={todoList.filter}
                changeFilter={changeFilter}
                changeStatus={changeStatus}
                removeTodoList={removeTodoList}
                onEditTask={onEditTask}
                onEditHeading={onEditHeading}
              />
            </Paper>
          </Grid>
        );
      })}
    </>
  );
};

export default TodoListPage;
