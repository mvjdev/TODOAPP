import { useState } from "react";
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({tasks, setTasks}) =>{

    const [task,setTask]=useState({
        id:"",
        name:"",
        status:"todo"
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.name.length< 3) return toast.error("A task must have more than 3");
        if (task.name.length>100) return toast.error("A task must not be more than 100 characters")

        setTasks((prev) => {
            const list = [...prev, task];

            localStorage.setItem("tasks", JSON.stringify(list));

            return list;
        });

        toast.success("Task Created")

        setTask({
            id:"",
            name:"",
            status:"todo"
        })
    }


    return (
        <div className="flex justify-center items-center mt-40">
  <form onSubmit={handleSubmit} className="flex flex-wrap p-4"> {/* Utilisation de mt-8 et mb-8 pour ajuster la marge */}
    <input
      type="text"
      className="border-2 justify-center border-slate-400 bg-slate-100 rounded-md p-2 mr-4 h-12 flex-1" /* Ajustement des classes pour centrer et rendre l'input extensible */
      value={task.name}
      onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
    />
    <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">Create</button>
  </form>
</div>

    );
};
export default CreateTask;