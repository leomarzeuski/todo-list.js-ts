import React, { Component } from 'react';
import Header from './compenets/header/Header';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>Conteúdo do meu aplicativo</p>
      </div>
    );
  }
}

export default App;
