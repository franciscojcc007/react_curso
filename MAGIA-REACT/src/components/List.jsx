import '../style/list.css'

const nombres = ["paso 1"];


export const List = ()=> {

  return (
    <ul>
      {nombres.map((nombre, index) => 
      (<li className="listP" key={index}>{nombre}</li>))}
    </ul>
  );
}
