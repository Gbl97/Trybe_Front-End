import './App.css';

// Exercicio 2
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <p>{Task(2)}</p>
    </div>

  );
}

export default App;
