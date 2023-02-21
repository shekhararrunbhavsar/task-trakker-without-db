import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Task(props) {
  const { task, deleteTask, toggleReminder } = props;

  return (
    <div
      className={`task ${task.reminder ? "remindergreen" : "reminderred"}`} //##
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h6>
        {task.text}
        <FaTimes
          onClick={() => deleteTask(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h6>
      <p>{task.day}</p>
      <p>
        <Link to="/taskdetails" state={{ text: task.text, day: task.day }}>
          View Details
        </Link>
      </p>
    </div>
  );
}
