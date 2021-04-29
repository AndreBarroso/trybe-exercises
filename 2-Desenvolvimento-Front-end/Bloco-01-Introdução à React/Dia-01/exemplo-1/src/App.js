import './App.css';

const tarefas = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4']

function App() {
  return (
    <ul>{tarefas.map(element => <li>{element}</li>)}</ul>
  );
}

export default App;
