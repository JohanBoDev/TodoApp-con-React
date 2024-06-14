import React, { useState } from 'react';
import '../App.css'; // Importar estilos
import ListaTareas from './ListaTareas';
import { MagicMotion } from "react-magic-motion";

function TodoApp() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const manejarCambio = (e) => {
    setNuevaTarea(e.target.value);
  };

  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea('');
    }
  };

  const completarTarea = (indice) => {
    const nuevasTareas = tareas.map((tarea, i) => {
      if (i === indice) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (indice) => {
    const nuevasTareas = tareas.filter((_, i) => i !== indice);
    setTareas(nuevasTareas);
  };

  return (
    <MagicMotion>
    <div className="App">
      <h1>Lista de Tareas</h1>
      <main>
        <section>
          <form className='agregarTarea' onSubmit={(e) => { e.preventDefault(); agregarTarea(); }}>
            <input
            className='input_tarea'
              type="text"
              value={nuevaTarea}
              onChange={manejarCambio}
              placeholder="¿Qué tareas tienes para hoy?"
            />
            <button className='boton_agregar' type="button" onClick={agregarTarea}>
              Agregar tarea
            </button>
          </form>
        </section>
        <section>
          <ListaTareas
            tareas={tareas}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        </section>
      </main>
    </div>
    </MagicMotion>
  );
}

export default TodoApp;
