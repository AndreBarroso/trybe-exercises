import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
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
    const {email, senha} = this.state;
    return (
      <div>
        Tela login
        <form>
          <label htmlFor="email">email</label>
            <input
              onChange={this.handleChange}
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
          <button type="submit">login</button>
        </form>
      </div>
    )
  }
}

export default Login;
