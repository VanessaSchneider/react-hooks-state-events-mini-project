import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [clicked, setClicked]=useState("All")


  const categoriesToShow = CATEGORIES

  const tasksToShow = TASKS.filter(
    (task)=> { if (task.category === clicked) {return task.category}
             else if (clicked === "All") {return true}})


  


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categoriesToShow} clicked={clicked} setClicked={setClicked} />
      <NewTaskForm />
      <TaskList tasks={tasksToShow} />
    </div>
  );
}

export default App;




