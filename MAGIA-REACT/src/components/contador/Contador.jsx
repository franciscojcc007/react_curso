
import { useState } from "react"
import { Button } from "../button/Button.jsx"

export const Contador = () =>{

  const [contador, setContador] = useState(0)
  
  const handleClick =()=>{
    setContador ((contador)=> contador + 1)
  }

  return(
    <section>
      <h2>contador</h2>
      <p>{contador}</p>
      <Button label="Incrementar" parentMethod={handleClick} />
    </section>
  )
}