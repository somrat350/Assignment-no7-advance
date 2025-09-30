const Toggle = ({tasks,taskStatus,setTaskStatus}) => {
  const taskToggleBtn = ["New", "In-progress", "Resolved"];

  const nL = tasks.filter(task=> task.status==="New");
  const iL = tasks.filter(task=> task.status==="In-progress");
  const rL = tasks.filter(task=> task.status==="Resolved");

  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:justify-center sm:items-center">
      {taskToggleBtn.map((btn,i) => (
        <button onClick={()=>setTaskStatus(btn)} key={i} className={`w-full sm:w-fit text-base font-semibold bg-linear-to-br ${taskStatus===btn?"from-[#54CF68] to-[#00827A]":"from-[#632EE3] to-[#9F62F2]"} transition-all duration-500 hover:from-[#54CF68] hover:to-[#00827A] text-white px-4 py-3 rounded-sm cursor-pointer`}>
          {btn} tasks ({btn==="New"?nL.length:btn==="In-progress"?iL.length:btn==="Resolved"?rL.length:""})
        </button>
      ))}
    </div>
  );
};

export default Toggle;
