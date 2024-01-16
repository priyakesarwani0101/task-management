import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const TaskForm = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });

  console.log(task, "task");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.length <= 0) {
      return toast.error("A task must have some value");
    }
    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    toast.success("Task created successfully");
    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2 border-cyan-600 rounded-md mr-4 h-10 w-64 mt-20"
          value={task.name}
          onChange={(e) =>
            setTask({ ...task, id: uuidv4(), name: e.target.value })
          }
        />
        <button className="bg-cyan-600 rounded-md px-4 h-10 text-white">
          Create Task
        </button>
      </form>
    </>
  );
};

export default TaskForm;
