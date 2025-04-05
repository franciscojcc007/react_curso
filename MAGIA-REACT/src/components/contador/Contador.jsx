import "../button/button.css"
import { useState } from "react"

export const Contador = ({value}) =>{

  const [contador, setContador] = useState(value)
  
  const handleClick =()=>{
    setContador (contador + 10)
  }

  return(
    <section>
      <h1>contador</h1>
      <p>{contador}</p>
      <button className='btn' onClick={handleClick}>suma +</button>
    </section>
  )
}