import React, { useState } from "react";
// import { Button } from "./button/Button.jsx";
import { Form } from "./form/form.jsx";
import { List } from "./list/List.jsx";
import { Presentation } from './presentations/Presentation.jsx'
import { Contador } from  "./contador/Contador.jsx"
// import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  // Agregar tarea
  const handleAddTask = () => {
    if (currentTask.trim() === "") return;
    setTasks([...tasks, currentTask]);
    setCurrentTask(""); // Limpia el input
  };

  // Eliminar tarea
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <Presentation />
      <h1>Gestor de Tareas</h1>
      <Form value={currentTask} onChange={setCurrentTask} onAddTask={handleAddTask} />
      <List tasks={tasks} onDeleteTask={handleDeleteTask} />
      <Contador value={100}/>
    </>
  );
};

export { TaskApp };
