import React, {Dispatch, FC} from "react";
import { Grid, Paper } from "@mui/material";

import { Todolist } from "@/components";
import { FilterEnum, TodoList } from "@/types/todolist/todolist.type";
import { Tasks } from "@/types/task/tasks.type";
import {
  addTaskActionCreator, changeTaskActionCreator,
  changeTaskStatusActionCreator,
  removeTaskActionCreator
} from "@/store/tasks-action-creators";
import { TasksActionsType } from "@/types/reducer/tasks-reducer-type";
import {
  changeTodoListFilterActionCreator,
  changeTodoListTitleActionCreator,
  removeTodoListActionCreator
} from "@/store/todolists-action-creators";
import { TodolistActionsType } from "@/types/reducer/todolist-reducer-type";

const TodoListPage: FC<{
  todoLists: TodoList[];
  tasks: Tasks;
  changeTasks: Dispatch<TasksActionsType>;
  changeTodoList: Dispatch<TodolistActionsType>;
}> = ({ todoLists, tasks, changeTasks, changeTodoList }) => {
  const removeTask = (id: string, todolistId: string) => {
    const action = removeTaskActionCreator(id,todolistId)
    changeTasks(action)
  };

  const addTask = (task: string, todolistId: string) => {
    const action = addTaskActionCreator(task, todolistId);
    changeTasks(action)
  };

  const changeStatus = (
    taskId: string,
    isDone: boolean,
    todolistId: string
  ) => {
    const action = changeTaskStatusActionCreator(todolistId,taskId,isDone);
    changeTasks(action)
  };

  const removeTodoList = (id: string) => {
    const action = removeTodoListActionCreator(id);
    changeTodoList(action);
    changeTasks(action);
  };

  const changeFilter = (filter: FilterEnum, todolistId: string) => {
    const action = changeTodoListFilterActionCreator(todolistId,filter)

    changeTodoList(action);
  };

  const onEditTask = (value: string, taskId: string, todolistId: string) => {
    const action = changeTaskActionCreator(todolistId,taskId,value);

    changeTasks(action);
  };

  const onEditHeading = (value: string, todolistId: string) => {
    const action = changeTodoListTitleActionCreator(todolistId,value);
    changeTodoList(action);
  };

  return (
    <>
      {todoLists.map((todoList) => {
        let taskForTodolist = tasks[todoList.id];
        if (todoList.filter === "active") {
          taskForTodolist = taskForTodolist.filter(
            (task) => !task.isDone
          );
        }
        if (todoList.filter === "completed") {
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
