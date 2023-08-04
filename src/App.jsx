import { useState,useEffect } from 'react'
import './index.css'
import CreateTask from './components/CreateTask'
import ListTasks from './components/ListTasks'
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [tasks, setTasks] = useState(0)

  console.log("tasks",tasks);

  useEffect(()=>{
    setTasks(JSON.parse(localStorage.getItem("tasks")))
  },[])

  return (
    <DndProvider backend={HTML5Backend}>
    <Toaster/>
  <div className = "bg-slate-100 w-100 h-screen flex-wrap items-center flex-col pt-3 gap-6">
    <CreateTask tasks = {tasks} setTasks = {setTasks}/>
    <ListTasks tasks = {tasks} setTasks = {setTasks}/>
  </div>
 </DndProvider>
  )

}
export default App;
