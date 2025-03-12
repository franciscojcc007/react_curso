import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App,Lista} from './App.jsx'
// import Lista from './components/Lista.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Lista/>
  </StrictMode>,
)
