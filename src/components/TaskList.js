import React from "react";
import Task from "./Task"

function TaskList({tasks}) {
const tasksPass= tasks.map((task)=>(
 <Task task={task} key={task}/>

))



  return (
    <div className="tasks">
     {tasksPass}
    </div>
  );
}

export default TaskList;
