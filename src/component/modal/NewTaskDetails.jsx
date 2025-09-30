import { useState } from "react";
import { toast } from "react-toastify";

const NewTaskDetails = ({tasks,setTasks}) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.max(...tasks.map(t=>t.id),0)+1,
      title: title,
      description: desc,
      customer: name,
      priority: type,
      createdAt: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }),
      status: "New"
    };
    setTasks([...tasks,newTask]);
    toast.success("New issue created successfully!");
    setName("")
    setTitle("")
    setDesc("")
    setType("")
    document.getElementById('newTaskDetails').close();
  };

  return (
    <>
      <dialog
        id="newTaskDetails"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-[#00bdb0]">
          <h2 className="text-3xl font-semibold mb-3">Issue a new task</h2>
          <form onSubmit={handleSubmit}>

            <div className="flex flex-col gap-4">

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-base">Enter your name:</legend>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input w-full"
                  placeholder="Type here"
                  required
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-base">Enter issue title:</legend>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input w-full"
                  placeholder="Type here"
                  required
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-base">Enter issue in details:</legend>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="textarea h-24 w-full"
                  placeholder="Type here"
                  required
                ></textarea>
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-base">Select issue type:</legend>
                <select className="select w-full" value={type} onChange={(e)=>setType(e.target.value)} required>
                  <option disabled value="">
                    Choose:
                  </option>
                  <option value="High">Account</option>
                  <option value="Medium">Functionality</option>
                  <option value="Low">Design</option>
                </select>
              </fieldset>
              <button type="submit" className="btn bg-[#9F62F2] text-xl font-medium text-white cursor-pointer">Submit</button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default NewTaskDetails;
