import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Cadastrados extends React.Component {
  render() {
    const {logado, clientes} = this.props;

    const noLogin = (<div>
      <span>Login não efetuado</span>
    </div>);

    const cadastrados = (<div>
      <h1>Cadastrados</h1>
      {!clientes? <span> Nenhum cliente cadastrado</span>: <ul>
          {clientes.map((cliente) => {
            return (
            <li>
              {`Nome: ${cliente.nome}
               idade: ${cliente.idade}
               email: ${cliente.email}`}
            </li>)
          })}
        </ul>}
      <Link to="/cadastrarCliente">Cadastrar Cliente</Link>
    </div>);
    console.log(logado)
    return(
      <div>
        {logado? cadastrados: noLogin }
        <Link to="/login">Retornar ao login</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  logado: state.loginReducer.login.logado,
  clientes: state.recordClientReducer,
})

export default connect(mapStateToProps, null)(Cadastrados);
