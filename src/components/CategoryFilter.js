import React from "react";  



function CategoryFilter({categories, clicked, setClicked}) {


function handleClick(e){
setClicked(e.target.value)
}

console.log(clicked)


const Categories = categories.map((category)=>{
  return <button onClick={handleClick} 
  value = {category}
  className= {(clicked === category) ? "selected" : ""}>
    {category}</button>
}
)


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {Categories}
    </div>
  );
}

export default CategoryFilter;
