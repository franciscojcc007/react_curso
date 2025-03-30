import './form.css'
import '../button/button.css'
// import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'

const Form = ({ value, onChange, onAddTask }) => {
  return (
    <div>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        placeholder="Escribe una tarea..."
      />
      <button onClick={onAddTask} className='btn' >Agregar</button>
    </div>
  );
};

export { Form };
