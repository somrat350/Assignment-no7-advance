import { toast } from "react-toastify";
import calendarImg from "../../assets/ri_calendar-line.png";

const TaskDetails = ({ details, setTasks, tasks }) => {
  const statusColors = {
    New: { bc: "#FECDD3", c: "#FF4D4F" },
    "In-progress": { bc: "#F8F3B9", c: "#FEBB0C" },
    Resolved: { bc: "#B9F8CF", c: "#02A53B" },
  };

  const handleTask = (tTask) => {
    if (tTask.status === "New") {
      const updatedTask = { ...tTask, status: "In-progress" };
      const fTasks = tasks.filter((t) => t.id !== tTask.id);
      setTasks([...fTasks, updatedTask]);
      toast.info("Task in-progress!");
    } else if (tTask.status === "In-progress") {
      const updatedTask = { ...tTask, status: "Resolved" };
      const fTasks = tasks.filter((t) => t.id !== tTask.id);
      setTasks([...fTasks, updatedTask]);
      toast.success("Task completed successfully!");
    } else {
      const fTasks = tasks.filter((t) => t.id !== tTask.id);
      setTasks(fTasks);
      toast.success("Task deleted successfully!");
    }
    document.getElementById("details")?.close();
  };

  const status = statusColors[details.status] || { bc: "#eee", c: "#333" };

  return (
    <dialog id="details" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h2 className="text-lg font-medium">{details.title}</h2>
          <div
            style={{ backgroundColor: status.bc }}
            className="min-w-fit max-h-fit rounded-[400px] px-3 py-1 flex items-center gap-4 sm:gap-1 w-full sm:w-fit justify-center"
          >
            <span
              style={{ backgroundColor: status.c }}
              className="w-4 h-4 rounded-[50%]"
            ></span>
            <span style={{ color: status.c }} className="text-base font-medium">
              {details.status}
            </span>
          </div>
        </div>

        <p className="text-base">{details.description}</p>

        <div className="mt-3 flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-0">
          <div className="flex justify-between sm:justify-normal items-center gap-2 text-sm font-medium">
            <span className="text-[#627382]">#100{details.id}</span>
            <span>{details.priority} Priority</span>
          </div>
          <div className="flex justify-between sm:justify-normal items-center gap-2 text-[#627382] text-sm font-medium">
            <span>{details.customer}</span>
            <div className="flex items-center gap-1">
              <img className="h-5 w-5" src={calendarImg} alt="" />
              <span>{details.createdAt}</span>
            </div>
          </div>
        </div>

        <div className="modal-action">
          <form method="dialog" className="flex justify-between w-full">
            <button className="btn bg-info text-white">Cancel</button>
            <button
              type="button"
              onClick={() => handleTask(details)}
              className="btn bg-[#02A53B] text-white"
            >
              {details.status === "New"
                ? "Send to in-progress"
                : details.status === "In-progress"
                ? "Task completed"
                : details.status === "Resolved"
                ? "Confirm to delete"
                : "Close"}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default TaskDetails;
