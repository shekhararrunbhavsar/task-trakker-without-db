import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "IT Induction Session",
      day: "Feb 15th at 2.30pm",
      reminder: true,
    },
    {
      id: "2",
      text: "JIRA Session",
      day: "Feb 16th at 10.30am",
      reminder: true,
    },
    {
      id: "3",
      text: "Agile Scrum Session",
      day: "Feb 19th at 12.30pm",
      reminder: true,
    },
    {
      id: "4",
      text: "Infoweb Induction Session",
      day: "Feb 22nd at 2.30pm",
      reminder: false,
    },
    {
      id: "5",
      text: "QMS Induction Session",
      day: "Feb 25th at 2.30pm",
      reminder: false,
    },
    {
      id: "6",
      text: "Doctors Appointment",
      day: "March 5th at 2:30pm",
      reminder: true,
    },
    {
      id: "7",
      text: "Parents Meeting in School",
      day: "March 6th at 1:30pm",
      reminder: true,
    },
    {
      id: "8",
      text: "Food shopping",
      day: "March 7th at 2:00pm",
      reminder: false,
    },
    {
      text: "Dentists Appointment",
      day: "Feb 25th at 2.40pm",
      reminder: true,
      id: "PbydBDR",
    },
  ]);

  const deleteTask = (id) => {
    // console.log("deleted", id);
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  // const getTask = (id) => {
  //   // console.log("deleted", id);
  //   setTasks(
  //     tasks.filter((task) => {
  //       return task.id === id;
  //     })
  //   );
  // };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    //##
    const id = Math.floor(Math.random() * 10000) + 1; //##
    const newTask = { id, ...task }; //##
    setTasks([...tasks, newTask]); //##
  };

  const toggleShowAddTask = () => {
    return setShowAddTask(!showAddTask);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <Header
          title="Task Tracker"
          showAddTask={showAddTask}
          toggleShowAddTask={toggleShowAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask addTask={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    deleteTask={deleteTask}
                    toggleReminder={toggleReminder}
                  />
                ) : (
                  "No Tasks to Show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/taskdetails" element={<TaskDetails />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
