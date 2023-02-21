import React from "react";
import "./App.css";
import { Todolist } from "./components/todo-list/todo-list";

function App() {
  const data = [
    { id: 1, task: "CSS", isDone: false },
    { id: 2, task: "React", isDone: true },
  ];
  const data2 = [{ id: 2, task: "JS", isDone: true }];
  return (
    <div className="App">
      <Todolist title="What to learn?" tasks={data} />
      <Todolist title="What to watch?" tasks={data2} />
    </div>
  );
}

export default App;
