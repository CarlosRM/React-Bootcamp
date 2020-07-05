import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxList.css';

/*
    Solved using a downward data-flow pattern, with dummy visual subcomponents
    (ColorBox.js), holding all the state in the parent and passing the method
    to change colors to the child components as a prop.
*/


class ColorBoxList extends Component {

    colors = ['red', 'blue', 'green', 'yellow', 'purple', 'teal', 'gray', 'cyan'];

    constructor(props) {
        super(props);

        const randomColors = Array.from({length: 16}, (v, i) => this.colors[Math.floor(Math.random() * 8)]);
        console.log(randomColors);
        this.state = {
            colors: randomColors
        }
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(id) {

        this.setState({
            colors: this.state.colors.map((el, i) => {
                if(i === id) {
                    let newColor = this.colors[Math.floor(Math.random() * 4)];
                    while( newColor === el) {
                        newColor = this.colors[Math.floor(Math.random() * 4)];
                    }
                    return newColor;
                }
                return el;
            })
        });
    }

    render() {
        return (
            <div id="container">
                {this.state.colors.map((el, i) => <ColorBox key={i} id={i} changeColor={this.changeColor} color={el}/>)}
            </div>
        )
    }
}

export default ColorBoxList;