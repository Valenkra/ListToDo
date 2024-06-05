import './App.css';
import React, {useState} from 'react'
import Titulo from './components/Titulo/Titulo';
import AgregarElemento from './components/AgregarElemento/AgregarElemento';

function App() {
  const [ToDo, setToDo] = useState([]);

console.log(ToDo);
  return (
    <div className="App">
        <Titulo sendText={"To Do"}></Titulo>
        <AgregarElemento ToDo={ToDo} setTodo={setToDo}></AgregarElemento>
    </div>
  );
}

export default App;
