import React from 'react';
import '../App.css'; // Importar estilos

function TodoItem({ tarea, indice, completarTarea, eliminarTarea }) {
  return (
    <ul className='tareas'>
    <li className='tarea' key={indice}>
      <p style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
        {tarea.texto}
      </p>
      <div className='botones'>
      <button className='completar_btn' onClick={() => completarTarea(indice)}>Completar</button>
      <button className='eliminar_btn' onClick={() => eliminarTarea(indice)}>Eliminar</button>
      </div>
    </li>
    </ul>
  );
}

export default TodoItem;
