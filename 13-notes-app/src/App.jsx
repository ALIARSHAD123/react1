import { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();

    // console.log(title,details);

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };




  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }
  return (
    <div className="h-screen bg-black lg:flex items-start text-white">
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
        className="flex flex-col lg:w-1/2 items-start gap-4 p-10"
      >
        <h1 className="text-4xl font-bold">Add a Note</h1>

        {/* first input for heading */}
        <input
          className="border-2 text-white font-medium rounded-md outline-none py-2 w-100 px-6"
          type="text"
          placeholder="Enter Task here..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* detailed INPUT */}

        <textarea
          className="border-2 h-40 rounded-md outline-none py-2 w-100 px-6"
          placeholder="Enter Task details here..."
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white active:scale-95 outline-none w-100 text-black border-2 rounded-md py-2 px-6">
          Add Task
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2   min-h-screen p-10">
        <h1 className="text-4xl font-bold">Your Notes</h1>

        <div className="container flex flex-wrap items-start gap-4 mt-7 overflow-auto h-[50%]">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className=" relative min-h-65 w-60 rounded-2xl p-5 text-black bg-white overflow-auto"
              >
                <h2 onClick={(idx)=>{
                  deleteNote(idx);
                }} className="absolute bottom-5 left-5 bg-red-600 p-1 rounded-full text-xs">
                  <X />
                </h2>
                <h2 className="text-xl font-bold uppercase leading-tight">
                  {elem.title}
                </h2>
                <p className="mt-2 leading-tight text-gray-800 font-medium ">
                  {elem.details}
                </p>
              </div>
            );

          })}
        </div>
      </div>
    </div>
  );
};

export default App;
