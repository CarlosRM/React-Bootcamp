import React, { Component } from 'react';
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heads: 0,
            tails: 0,
            currentSide: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const result = Math.floor(Math.random() * 2);
        console.log(result);
        this.setState((st) => {
            return {
                heads: result ? st.heads : st.heads + 1,
                tails: result ? st.tails + 1 : st.tails,
                currentSide: result
            }
        });

    }

    handleClick() {
        console.log('handleclick');
        this.flipCoin();
    }

    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                <Coin side={this.state.currentSide}/>
                <button onClick={this.handleClick}>Flip!</button>
                <p>
                    Out of {this.state.heads + this.state.tails} flips, there have been {this.state.heads} heads and {this.state.tails} tails.
                </p>
            </div>
        

        )
    }
}

export default CoinFlipper;