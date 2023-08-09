import React, { useState } from "react";
import { v1 } from "uuid";
import "@/App.css";
import { Todolist } from "@/components/todo-list/todo-list";
import { FilterValues, TaskType } from "@/components/todo-list/todo-list.type";
import AddItemForm from "@/components/add-item-form";

type Todo = { id: string; title: string; filter: FilterValues };

function App() {
  const todolistId1 = v1();
  const todolistId2 = v1();

  const [todolists, setTodolist] = useState<Todo[]>([
    { id: todolistId1, title: "What to learn?", filter: "active" },
    { id: todolistId2, title: "What to buy?", filter: "completed" },
  ]);
  const [tasks, setTasks] = useState({
    [todolistId1]: [
      { id: v1(), task: "1", isDone: false },
      { id: v1(), task: "2", isDone: true },
    ],
    [todolistId2]: [
      { id: v1(), task: "3", isDone: false },
      { id: v1(), task: "4", isDone: true },
    ],
  });

  const removeTask = (id: string, todolistId: string) => {
    const filteredTasks = tasks[todolistId].filter((t) => t.id !== id);
    tasks[todolistId] = filteredTasks;
    setTasks({ ...tasks });
  };

  const addTask = (task: string, todolistId: string) => {
    const newTask: TaskType = { id: v1(), task, isDone: false };
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
    let task = tasks[todolistId].find((taskItem) => taskItem.id === taskId);
    if (task) {
      task.isDone = isDone;
      setTasks({ ...tasks });
    }
  };

  const removeTodoList = (id: string) => {
    const filteredTodos = todolists.filter((list) => list.id !== id);
    setTodolist(filteredTodos);
    delete tasks[id];
    setTasks({...tasks})
  };

  const changeFilter = (filter: FilterValues, todolistId: string) => {
    let todo = todolists.find((todo) => todo.id === todolistId);
    if (todo) {
      todo.filter = filter;
      setTodolist([...todolists]);
    }
  };

  return (
    <div className="App">
      <div className="w-[400px]">
        <AddItemForm onSubmit={addTodoList} />
      </div>
      <div className="flex gap-[30px]">
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
