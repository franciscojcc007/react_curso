import './App.css'

export function App() {
  return (
    <>
      <h1>curso comenzado por frank</h1>
      <div className='card'>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export function Lista() {
  const nombres = ['Ana', 'Juan', 'Pedro','Francisco'];

  return (
    <ul>
      {nombres.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
    </ul>
  );
}

