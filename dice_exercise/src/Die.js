import React, { Component } from 'react';
import "./Die.css";

class Die extends Component {
    render() {
        let cls = `Die fa fa-dice-${this.props.face}`;
        return <i className={cls}></i>
    }
}

export default Die;