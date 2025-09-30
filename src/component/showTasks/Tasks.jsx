import EmptyTask from "./EmptyTask";
import Task from "./Task";

const Tasks = ({setDetails,tasks,setTasks,taskStatus}) => {

  const filtered = tasks.filter(task=> task.status===taskStatus)

  return (
    <div className='col-span-full lg:col-span-3 mt-5'>
      <h2 className='text-3xl font-bold'>{taskStatus} Tasks</h2>
      <div className="mt-5 grid md:grid-cols-2 xl:grid-cols-3 gap-5 pb-5">
        {
          filtered.length===0?
          <EmptyTask/>:
          filtered.map(task=><Task key={task.id} setDetails={setDetails} setTasks={setTasks} tasks={tasks} task={task}/>)
        }
      </div>
    </div>
  );
};

export default Tasks;