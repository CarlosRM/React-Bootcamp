import React, { Component } from 'react';
import './Pokecard.css';

const imgsrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

function padId(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

class Pokecard extends Component {
    render() {
        const pokemon = this.props.pokemon;
        const imgUrl = imgsrc + padId(pokemon.id, 3) + '.png';
        return(
            <div className="Pokecard">
                <h1>{pokemon.name}</h1>
                <img alt={pokemon.name} src={imgUrl}></img>
                <p><strong>Type:</strong> {pokemon.type}</p>
                <p><strong>EXP:</strong> {pokemon.base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;