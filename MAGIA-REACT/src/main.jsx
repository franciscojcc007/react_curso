import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/style.css'
import {Presentation} from './components/presentations/Presentation.jsx'
import {List} from './components/list/List.jsx'
import {Button} from './components/button/Button.jsx'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import React from 'react'
// import { DiAtom } from 'react-icons/di'


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

