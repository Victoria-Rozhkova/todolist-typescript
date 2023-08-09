import React, { useState } from "react";
import { v1 } from "uuid";
import "@/App.css";

import { FilterValues, Task, Tasks, Todo } from "@/components/todo-list";
import { AddItemForm, Todolist } from "@/components";

function App() {
  const todolistId1 = v1();
  const todolistId2 = v1();

  const [todolists, setTodolist] = useState<Todo[]>([
    { id: todolistId1, title: "What to learn?", filter: "all" },
    { id: todolistId2, title: "What to buy?", filter: "all" },
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

  const removeTask = (id: string, todolistId: string) => {
    const filteredTasks = tasks[todolistId].filter((t) => t.id !== id);
    tasks[todolistId] = filteredTasks;
    setTasks({ ...tasks });
  };

  const addTask = (task: string, todolistId: string) => {
    const newTask: Task = { id: v1(), task, isDone: false };
    const updatedTasks = [newTask, ...tasks[todolistId]];
    tasks[todolistId] = updatedTasks;
    setTasks({ ...tasks });
  };

  const addTodoList = (title: string) => {
    const newTodo: Todo = { id: v1(), title, filter: "all" };
    setTodolist((prev) => [...prev, newTodo]);
    setTasks((prev) => ({ ...prev, [newTodo.id]: [] }));
  };

  const changeStatus = (
    taskId: string,
    isDone: boolean,
    todolistId: string
  ) => {
    const task = tasks[todolistId].find((taskItem) => taskItem.id === taskId);
    if (task) {
      task.isDone = isDone;
      setTasks({ ...tasks });
    }
  };

  const removeTodoList = (id: string) => {
    const filteredTodos = todolists.filter((list) => list.id !== id);
    setTodolist(filteredTodos);
    delete tasks[id];
    setTasks({ ...tasks });
  };

  const changeFilter = (filter: FilterValues, todolistId: string) => {
    const todolist = todolists.find((todolist) => todolist.id === todolistId);
    if (todolist) {
      todolist.filter = filter;
      setTodolist([...todolists]);
    }
  };

  const onEditTask = (value: string, taskId: string, todolistId: string) => {
    const task = tasks[todolistId].find((taskItem) => taskItem.id === taskId);
    if (task) {
      task.task = value;
      setTasks({ ...tasks });
    }
  };

  const onEditHeading = (value: string, todolistId: string) => {
    const todolist = todolists.find((todolist) => todolist.id === todolistId);
    if (todolist) {
      todolist.title = value;
      setTodolist([...todolists]);
    }
  };

  return (
    <div className="App">
      <div className="w-[400px]">
        <AddItemForm placeholder="New todo list" onSubmit={addTodoList} />
      </div>
      <div className="flex gap-[30px] mt-[10px]">
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
          );
        })}
      </div>
    </div>
  );
}

export default App;
