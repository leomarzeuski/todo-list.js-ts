import React, { Component } from 'react';
import './Input.module.css'

class Input extends Component {
    render() {
        return (
            <div className='container'>
                <input className='Input' type="text"></input>
                <button className='Button'> Crirar</button>
            </div>
        );
    }
}

export default Input;