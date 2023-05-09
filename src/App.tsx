import React, { useState } from "react";
import { v1 } from "uuid";
import "@/App.css";
import { Todolist } from "@/components/todo-list/todo-list";
import { FilterValues, TaskType } from "@/types/todo-list.type";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: v1(), task: "CSS", isDone: false },
    { id: v1(), task: "React", isDone: true },
  ]);
  const [filter, setFilter] = useState<FilterValues>("all");

  const removeTask = (id: string) => {
    const result = tasks.filter((t) => t.id !== id);
    setTasks(result);
  };

  const addTask = (task: string) => {
    const newTask: TaskType = { id: v1(), task, isDone: false };
    setTasks((prev) => [newTask, ...prev]);
  };

  const changeStatus = (taskId: string, isDone: boolean) => {
    let task = tasks.find((taskItem) => taskItem.id === taskId);
    if (task) task.isDone = isDone;
    setTasks([...tasks]);
  };

  let filteredTasks = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((task) => task.isDone === false);
  }
  if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.isDone === true);
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn?"
        tasks={filteredTasks}
        removeTask={removeTask}
        addTask={addTask}
        currentFilter={filter}
        changeFilter={setFilter}
        changeStatus={changeStatus}
      />
    </div>
  );
}

export default App;
