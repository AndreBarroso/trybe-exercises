import React from 'react'
import './stylePokemons.css';
class Pokemon extends React.Component {
    
    render () {
        const pokemon = this.props.especime;
        const name = <li>{pokemon.name}</li>;
        const type = <li>{pokemon.type}</li>;
        const weigth = <li>{`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`} </li>
        const img = <img src = {pokemon.image}/>
        const listIformations = <ul>{name} {type} {weigth}</ul>
        const card = <div className = "card">{listIformations}{img}</div>
        return (card)
    }
}

export default Pokemon