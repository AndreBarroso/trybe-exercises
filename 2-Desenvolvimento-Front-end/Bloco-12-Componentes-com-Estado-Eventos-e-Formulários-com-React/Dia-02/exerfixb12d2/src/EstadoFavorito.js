import React, { Component } from 'react'

class EstadoFavorito extends Component {
  
  render() {
    let error = undefined;
    const {value, handleChange } = this.props
    let handle = handleChange;

    if(value.length > 10) {
      error = 'Texto muito grande';
    };

    return (
      <label>
      Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea 
          name="estadoFavorito" 
          value={value} 
          onChange={handle} />
          <span>{error ? error : ''}</span>
    </label>
    
    );
  }
}

export default EstadoFavorito