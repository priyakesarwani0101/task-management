import { useEffect, useState } from "react";
import Section from "./Section";
import { taskStatus } from '../constants/constant'

const TaskList = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    const filteredTodos = tasks.filter((task) => task.status === "todo");
    const filteredInProgress = tasks.filter((task) => task.status === "inprogress");
    const filteredDone = tasks.filter((task) => task.status === "done");
    setTodos(filteredTodos);
    setInProgress(filteredInProgress);
    setDone(filteredDone);
  }, [tasks]);

  return (
    <div className="flex gap-16">
      {taskStatus.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          inProgress={inProgress}
          done={done}
        />
      ))}
    </div>
  );
};

export default TaskList;
