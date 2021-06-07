import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { recordClient } from '../redux/actions/index';

class CadastroClientes extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      idade: '',
      email: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const {sendClient} = this.props;
    const {nome, idade, email} = this.state;
    sendClient(nome, idade, email)
    this.setState({
      nome: '',
      idade: '',
      email: '',
    })
  }


  handleChange({target}) {
    const {name, value} = target;
    this.setState({
       [name]: value,
       click: false,
    })
  }

  render() {
    const {nome, idade, email} = this.state;
    return (
      <div>
        <form>
          <label htmlFor="nome">Nome</label>
          <input type="text"  onChange={(this.handleChange)} id="nome" name="nome" value={nome} placeholder="Digite o nome"/>
          <label htmlFor="idade">Idade</label>
          <input type="number"  onChange={(this.handleChange)} id="idade" name="idade" value={idade} placeholder="Digite a idade"/>
          <label htmlFor="email">email</label>
          <input type="email"  onChange={(this.handleChange)} id="email" name="email" value={email} placeholder="Digite o email"/>
          <button type="submit" onClick={this.handleClick}>Cadastrar</button>
        </form>
        <div>
          <Link to="/cadastrados">Ir para Clientes Cadastrados</Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  sendClient: (nome, idade, email) => dispatch(recordClient(nome, idade, email))
})

export default connect(null, mapDispatchToProps)(CadastroClientes);
