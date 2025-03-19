import '../style/list.css'

const nombres = ["paso 1", " paso 2", "paso 3", "paso 4"];


export const Lista = ()=> {

  return (
    <ul>
      {nombres.map((nombre, index) => 
      (<li className="listP" key={index}>{nombre}</li>))}
    </ul>
  );
}
