import React from 'react';
import Home from './Home'
import about from './about'
import Teste from './Teste';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/about" component={about} />
        <Route path="/" component={Home} />
        <Route path="/Teste" component={Teste} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
