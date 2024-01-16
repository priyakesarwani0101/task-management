import { useDrag } from "react-dnd";

const TaskItem = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: {id : task.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div ref={drag} className={`p-4 mt-4 border-solid border-2 border-cyan-600 rounded-md text-center justify-center cursor-grab ${isDragging ? 'opacity-20' : 'opacity-100'}`}>
      <p>{task.name}</p>
    </div>
  );
};

export default TaskItem;
