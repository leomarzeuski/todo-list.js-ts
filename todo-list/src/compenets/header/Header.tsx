import React, { Component } from 'react';
import logo from '../../assets/Logo.svg'; // Corrija a extensão do arquivo e a importação
import './Header.module.css';

class Header extends Component {
    render() {
        return (
            <header className='header' >
                <h1>Meu header <img src={logo} alt="Logo" /></h1>
            </header>
        );
    }
}

export default Header;