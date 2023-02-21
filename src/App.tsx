import React, { useState } from "react";
import "@/App.css";
import { Todolist } from "@/components/todo-list/todo-list";
import { FilterValues } from "@/types/todo-list.type";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "CSS", isDone: false },
    { id: 2, task: "React", isDone: true },
  ]);
  const [filter, setFilter] = useState<FilterValues>("all");

  const removeTask = (id: number) => {
    const result = tasks.filter((t) => t.id !== id);
    setTasks(result);
  };
  let filteredTasks = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((t) => t.isDone === false);
  }
  if (filter === "completed") {
    filteredTasks = tasks.filter((t) => t.isDone === true);
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn?"
        tasks={filteredTasks}
        removeTask={removeTask}
        changeFilter={setFilter}
      />
    </div>
  );
}

export default App;
