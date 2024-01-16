import "./App.css";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(items);
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className="flex bg-cyan-600 w-screen h-12 text-center justify-center">
        <h1 className="text-white text-2xl font-bold p-2">
          Task Management App
        </h1>
      </div>
      <div className="bg-cyan-50 w-screen h-screen flex flex-col items-center pt-4 gap-20">
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;
