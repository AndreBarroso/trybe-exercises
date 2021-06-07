import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { dataLogin } from '../redux/actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      emailSend: '',
      senhaSend: '',
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange({target}) {
    const {name, value} = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const {getLoginData} = this.props;
    const {email, senha} = this.state;
    let logado = false;
    if(email && senha) logado = true;
    return (
      <div>
        Tela login
        <form>
          <label htmlFor="email">email</label>
            <input
              onChange={(this.handleChange)}
              type="email"
              value={ email }
              id="email"
              name="email"
            /> 
          <label htmlFor="senha">senha</label>
            <input
             onChange={this.handleChange} 
             type="number" 
             value={ senha } 
             id="senha"
             name="senha"
            />
          <Link to="/cadastrados"
           onClick={ ()=> getLoginData(email, senha, logado)}
          >
             login
           </Link>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getLoginData: (email, senha, logado) => dispatch(dataLogin(email,senha, logado))
})

export default connect(null, mapDispatchToProps)(Login);
