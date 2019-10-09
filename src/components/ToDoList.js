import React from "react";

function ToDoList({ tasks }) {
  return (
    <ul>
      {tasks.map(item => {
        return <li>{item.task}</li>;
      })}
    </ul>
  );
}

export default ToDoList;
