import './App.css';

const tarefas = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4']

const task = (value) => {
  return (
    <li>{value}</li>
  );
}


function App() {
  return (
    <ul>{tarefas.map(element => <li>{element}</li>)}</ul>
  );
}

export default App;
