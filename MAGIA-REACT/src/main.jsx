import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/style.css'
import {TaskApp}  from './components/TaskApp.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskApp/>
  </StrictMode>,
)


