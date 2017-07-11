import React, { Component } from 'react';

import Header from './components/Header/Header.js';
import IpadSection from './components/IpadSection/IpadSection.js';
import ProductsSection from './components/ProductsSection/ProductsSection.js';
import Footer from './components/Footer/Footer.js';

import './App.css';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <IpadSection />
        <ProductsSection />
        <Footer />

      </div>
    );
  }
}

export default App;
