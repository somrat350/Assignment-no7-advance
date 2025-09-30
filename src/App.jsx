import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import { ToastContainer } from "react-toastify";
import Footer from "./component/Footer";
import { getItem, setItem } from "./localstorage/localstorage";
import Tasks from "./component/showTasks/Tasks";
import Toggle from "./component/taskToggoler/Toggle";
import TaskDetails from "./component/modal/TaskDetails";
import NewTaskDetails from "./component/modal/NewTaskDetails";

function App() {
  const [tasks,setTasks] = useState(getItem);
  const [taskStatus,setTaskStatus] = useState("New");
  const [details,setDetails] = useState({})

  setItem(tasks)
  
  return (
    <>
      <TaskDetails details={details} tasks={tasks} setTasks={setTasks} />
      <NewTaskDetails tasks={tasks} setTasks={setTasks} />
      <ToastContainer/>
      <div className="max-w-[1440px] mx-auto px-5">
        <Header/>
        <Hero/>
        <Toggle tasks={tasks} taskStatus={taskStatus} setTaskStatus={setTaskStatus} />
        {/* <Temp setTasks={setTasks} /> */}
        <Tasks setDetails={setDetails} setTasks={setTasks} taskStatus={taskStatus} tasks={tasks} />
      </div>
      <Footer />
    </>
  );
}

export default App;
