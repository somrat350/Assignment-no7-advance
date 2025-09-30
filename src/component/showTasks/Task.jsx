import calendarImg from "../../assets/ri_calendar-line.png";

const Task = ({ setDetails, task }) => {
  const statusColors = {
    New: { bc: "#FECDD3", c: "#FF4D4F" },
    "In-progress": { bc: "#F8F3B9", c: "#FEBB0C" },
    Resolved: { bc: "#B9F8CF", c: "#02A53B" },
  };

  const handleTask = (tTask) => {
    setDetails(tTask);
    document.getElementById("details").showModal();
  };

  return (
    <div
      title="Click to see details"
      onClick={() => handleTask(task)}
      className="border border-gray-300 rounded-lg p-3 flex flex-col gap-2 shadow-lg shadow-gray-400 cursor-pointer hover:scale-95 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <h2 className="text-lg font-medium line-clamp-1">{task.title}</h2>
        <div
          style={{ backgroundColor: `${statusColors[task.status].bc}` }}
          className="min-w-fit max-h-fit rounded-[400px] px-3 py-1 flex items-center gap-4 sm:gap-1 w-full sm:w-fit justify-center"
        >
          <span
            style={{ backgroundColor: `${statusColors[task.status].c}` }}
            className="w-4 h-4 rounded-[50%]"
          ></span>
          <span
            style={{ color: `${statusColors[task.status].c}` }}
            className="text-base font-medium"
          >
            {task.status}
          </span>
        </div>
      </div>
      <p className="line-clamp-2 text-base">{task.description}</p>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-0">
        <div className="flex justify-between sm:justify-normal items-center gap-2 text-sm font-medium">
          <span className="text-[#627382]">#100{task.id}</span>
          <span>{task.priority} Priority</span>
        </div>
        <div className="flex justify-between sm:justify-normal items-center gap-2 text-[#627382] text-sm font-medium">
          <span>{task.customer}</span>
          <div className="flex items-center gap-1">
            <img className="h-5 w-5" src={calendarImg} alt="" />
            <span>{task.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
