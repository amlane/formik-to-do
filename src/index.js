import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { data } from "./data.js";

import "./styles.css";

//testing

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <div className="App">
      <h1>October Goals</h1>
      <ToDoList tasks={tasks} />
      <ToDoForm setTasks={setTasks} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
