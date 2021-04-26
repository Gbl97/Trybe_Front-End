import './App.css';

// Exercicio 2.0
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

// Exercicio 2.1
 const arrays = ["Exercícios", "Projeto"];

//  const CriandoLista = () => arrays.map((array) => <li>{array}</li>);
 const CriandoLista = () => arrays.map((array) => Task(array));

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <p>{Task(2)}</p>
      <CriandoLista />
      {/* <CriandoLista /> */}
    </div>

  );
}

export default App;
