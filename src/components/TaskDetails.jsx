import { Link, useLocation } from "react-router-dom";

const TaskDetails = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <div>
      <h5>{location.state.text}</h5>
      <p>{location.state.day}</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default TaskDetails;
