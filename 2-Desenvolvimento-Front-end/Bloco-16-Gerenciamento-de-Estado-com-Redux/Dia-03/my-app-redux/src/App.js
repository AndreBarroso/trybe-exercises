import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './componentes/Home';
import Login from './componentes/Login';
import Cadastrados from './componentes/Cadastrados';
import CadastroClientes from './componentes/cadastroClientes';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastrados" component={Cadastrados} />
          <Route exact path="/cadastrarCliente" component={CadastroClientes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
