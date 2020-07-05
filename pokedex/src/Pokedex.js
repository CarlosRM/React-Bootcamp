import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        return(
            <div className="Pokedex">
                {this.props.winner ? <h1 class="winner">Winning Hand</h1> : <h1 class="loser">Losing Hand</h1>}
                <p><strong>Total experience:</strong> {this.props.exp}</p>
                <div className="PokemonContainer">
                    {this.props.pokemons.map((value, index) => {
                        return <Pokecard pokemon={value} />
                    })}
                </div>
            </div>

        )
    }
}

export default Pokedex;