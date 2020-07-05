import React, { Component } from 'react';
import Pokedex from './Pokedex.js';

const pokemons = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Pokegame extends Component {



    render() {
        let firstPokedex = [];
        let secondPokedex = [];
        let firstEXP = 0;
        let secondEXP = 0;
        // Pushes pokemons to the pokedexs randomly
        pokemons.forEach((item, index) => {
            const rand = getRandomInt(1,2);
            const maxPokedexLen = pokemons.length / 2;

            if(rand === 1) {
                if(firstPokedex.length < maxPokedexLen) {
                    firstPokedex.push(item);
                    firstEXP += item.base_experience;
                } else {
                    secondPokedex.push(item);
                    secondEXP += item.base_experience;

                }
            } else {
                if(secondPokedex.length < maxPokedexLen) {
                    secondPokedex.push(item);
                    secondEXP += item.base_experience;

                } else {
                    firstPokedex.push(item);
                    firstEXP += item.base_experience;

                }           
            }
        })

        return(
            <div className="Pokegame">
                <Pokedex pokemons={firstPokedex} exp={firstEXP} winner={firstEXP > secondEXP}/>
                <Pokedex pokemons={secondPokedex} exp={secondEXP} winner={secondEXP > firstEXP}/>
            </div>
        );
    }
}

export default Pokegame;