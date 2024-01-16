import toast from "react-hot-toast";
import Header from "./Header";
import TaskItem from "./TaskItem";
import { useDrop } from "react-dnd";

const Section = ({ status, tasks, setTasks, todos, inProgress, done }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Todo";
  let tasksToMap = todos;
  if (status === "inprogress") {
    text = "In Progress";
    tasksToMap = inProgress;
  }
  if (status === "done") {
    text = "Done";
    tasksToMap = done;
  }
  const addItemToSection = (id) => {
    setTasks((prev) => {
      const modifiedTask = prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: status,
          };
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(modifiedTask));
      toast.success("Task Status Updated!!");
      return modifiedTask;
    });
  };
  return (
    <div
      ref={drop}
      className={`w-64 min-h-[450px] h-full shadow-lg rounded-md p-2 ${isOver ? "bg-slate-100" : ""}`}
    >
      <Header text={text} count={tasksToMap.length} />
      {tasksToMap.length > 0 &&
        tasksToMap.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
    </div>
  );
};

export default Section;
