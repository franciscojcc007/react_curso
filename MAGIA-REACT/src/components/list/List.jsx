import './list.css'

const List = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => onDeleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export { List };
