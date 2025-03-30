import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/style.css'
// import { Presentation } from './components/presentations/Presentation.jsx'
// import { List } from './components/list/List.jsx'
// import { Button } from './components/button/Button.jsx'
// import { Form } from './components/form/form.jsx'
import { TaskApp } from './components/TaskApp.jsx'

// import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import React from 'react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskApp/>
    {/* <Presentation /> */}
    {/* <Form />
    <List />
    <React.Fragment>
      <Button text="Crear" icon={FaPlus} action='create' />
      <Button text="Editar" icon={FaEdit} action='edit' />
      <Button text="Eliminar" icon={FaTrash} action='delete' />
    </React.Fragment> */}
  </StrictMode>,
)


