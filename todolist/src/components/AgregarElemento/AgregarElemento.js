import Boton from '../Boton/Boton';
import './AgregarElemento.css';

function AgregarElemento({ ToDo, setTodo }) {
    const addElement = (e) => {
      setTodo([...ToDo, {
        content: e.target.contenido.value
      }]);
    }

    return (<form onSubmit={addElement}>
    <input type="text" name="contenido" placeholder='Qué queres hacer?'></input>
    <Boton sendText={"Agregar a la lista"}></Boton>
  </form>
);
}


export default AgregarElemento;