import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {

    sides = ['https://tinyurl.com/react-coin-heads-jpg', 'https://tinyurl.com/react-coin-tails-jpg']

    render() {
        return (
            <img alt="coin" src={this.sides[this.props.side]}></img>
        )
    }

}

export default Coin;
