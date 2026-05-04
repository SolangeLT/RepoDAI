import { useState } from "react";
import SingleTask from "./SingleTask";
import "./TodoList.css";

function TodoList() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      texto: "Clean my room",
      colorFondo: "#c77b00",
      estaCompletada: false,
    },
    {
      id: 2,
      texto: "Decluttering my study room",
      colorFondo: "#f6b23f",
      estaCompletada: false,
    },
    {
      id: 3,
      texto: "Buy some new stationary",
      colorFondo: "#e99a14",
      estaCompletada: false,
    },
    {
      id: 4,
      texto: "Spa pedicure and manicure",
      colorFondo: "#ffb84d",
      estaCompletada: false,
    },
    {
      id: 5,
      texto: "Playing basketball with friends",
      colorFondo: "#d19532",
      estaCompletada: false,
    },
    {
      id: 6,
      texto: "Reduce fast food",
      colorFondo: "#d4a45a",
      estaCompletada: false,
    },
    {
      id: 7,
      texto: "Buy skincare",
      colorFondo: "#ee9d12",
      estaCompletada: false,
    },
  ]);

  const completarTarea = (id) => {
    const nuevasTareas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          estaCompletada: !tarea.estaCompletada,
        };
      }

      return tarea;
    });

    setTareas(nuevasTareas);
  };

  return (
    <div className="todo-container">
      <h1>To Do List</h1>
      <h2>Checklist</h2>

      <p className="name">Name: Syanisya</p>

      <div className="tasks-container">
        {tareas.map((tarea) => (
          <SingleTask
            key={tarea.id}
            texto={tarea.texto}
            colorFondo={tarea.colorFondo}
            estaCompletada={tarea.estaCompletada}
            onCompletar={() => completarTarea(tarea.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
