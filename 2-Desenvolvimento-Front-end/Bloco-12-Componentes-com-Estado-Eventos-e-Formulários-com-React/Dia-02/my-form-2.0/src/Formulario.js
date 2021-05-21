import React from 'react';

class Formulario extends React.Component {
  constructor(){
    super();
    this.uppercase = this.uppercase.bind(this);
    this.verifyCityName = this.verifyCityName.bind(this);
    this.state = {
      nome: '',
      cidade: '',
    }
  }

  uppercase({target}){
    const {value} = target;
    this.setState({
      nome: value.toUpperCase(),
    })
  }

  verifyCityName({target}){
    const {value} = target;
      this.setState({
        cidade: value,
      })
  }

  render() {
    return (
      <fieldset>
        <label> Nome
          <input onChange={this.uppercase} value={this.state.nome} type="text" name="nome" maxLength="40" required></input>
        </label> <br/>
        <label> Email
          <input type="text" name="email" maxLength="50" required></input>
        </label> <br/>
        <label> CPF
          <input type="text" name="cpf" maxLength="11" required></input>
        </label> <br/>
        <label> Endereço
          <input type="text" name="endereco" maxLength="200" required></input>
        </label> <br/>
        <label> Cidade
         <input onblur={this.uppercase}   type="text" name="cidade" maxLength="28" required></input>
        </label> <br/>
        <label> Estado
         <select name="estados" id="estados" required>
            <option value="ac">Acre</option>
            <option value="al">Alagoas</option>
            <option value="ap">Amapá</option>
            <option value="am">Amazonas</option>
            <option value="ba">Bahia</option>
            <option value="ce">Ceará</option>
            <option value="df">Distrito Federal</option>
            <option value="es">Espirito Santo</option>
            <option value="go">Goiás</option>
            <option value="ma">Maranhão</option>
            <option value="mt">Mato Grosso</option>
            <option value="ms">Mato Grosso do Sul</option>
            <option value="mg">Minas Gerais</option>
            <option value="pa">Pará</option>
            <option value="pb">Paraíba</option>
            <option value="pe">Pernabuco</option>
            <option value="pi">Piaui</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="rn">Rio Grande do Norte</option>
            <option value="rs">Rio Grande do Sul</option>
            <option value="ro">Rondônia</option>
            <option value="rr">Roraima</option>
            <option value="sc">Santa Catarina</option>
            <option value="sp">São Paulo</option>
            <option value="se">Sergipe</option>
            <option value="to">Tocantis</option>
          </select> <br/>
        </label>
        <input type="radio" id="male" name="gender" value="male"/>
        <label for="male">Male</label><br/>
        <input type="radio" id="female" name="gender" value="female"/>
        <label for="female">Female</label><br/>
      </fieldset>
    );
  }
}

export default Formulario;