import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {


    constructor(props) {
        super(props);
        this.handleChangeColor = this.handleChangeColor.bind(this);
    }

    handleChangeColor() {
        this.props.changeColor(this.props.id);
    }

    render() {
        return (
            <div onClick={this.handleChangeColor} className="colorBox" style={{"backgroundColor" : this.props.color}}></div>
        )
    }
}

export default ColorBox;