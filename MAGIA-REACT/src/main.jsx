import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import {Presentation} from './components/Presentation.jsx'
import {List} from './components/List.jsx'
// import { DiAtom } from 'react-icons/di'
import {Button} from './components/Button.jsx'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import React from 'react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Presentation />
    {/* <DiAtom /> */}
    <List/>
    <React.Fragment>
      <Button text="Crear" icon={FaPlus} />
      <Button text="Editar" icon={FaEdit} />
      <Button text="Eliminar" icon={FaTrash} />
    </React.Fragment>
  </StrictMode>,
)
