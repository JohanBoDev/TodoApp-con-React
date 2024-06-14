import React from 'react';
import TodoItem from './TodoItem';
import '../App.css'; // Importar estilos

function ListaTareas({ tareas, completarTarea, eliminarTarea }) {
  return (
    <ul>
      {tareas.map((tarea, indice) => (
        <TodoItem
          key={indice}
          tarea={tarea}
          indice={indice}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
