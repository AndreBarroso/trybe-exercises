import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Cadastrados extends React.Component {
  render() {
    const {logado} = this.props;

    const noLogin = (<div>
      <span>Login não efetuado</span>
    </div>);

    const cadastrados = (<div>
      <span>Cadastrados</span>
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
})

export default connect(mapStateToProps, null)(Cadastrados);
