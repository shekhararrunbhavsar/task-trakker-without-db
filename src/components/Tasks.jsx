import Task from "./Task";

export default function Tasks(props) {
  const { tasks, deleteTask, toggleReminder } = props;

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </div>
  );
}
