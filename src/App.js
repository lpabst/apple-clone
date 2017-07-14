import React, { Component } from 'react';

import Header from './components/Header/Header.js';
import IpadSection from './components/IpadSection/IpadSection.js';
import ProductsSection from './components/ProductsSection/ProductsSection.js';
import Footer from './components/Footer/Footer.js';

import './App.css';
import './reset.css';

class App extends Component {

  toggleProjectInfo(){
    var description = document.getElementById('project_description');
    if (description.style.height === 'auto'){
      description.style.height = '0px';
    }else{
      description.style.height = 'auto';
    }
  }

  render() {
    return (
      <div className="App">

        <div id='project_info' onClick={ this.toggleProjectInfo } >
          <h2>Project Info: Click Here!</h2>
          <div id='project_description'>
            <p>
              This project is a CSS only clone of the Apple home page.
              The purpose of the project was to practice recreating a
              pixel perfect version of a design, whether it be a clone
              or a design handed to me by a design team. 
            </p>
            <p>
              Functionality has not been built in, so items aren't clickable,
              but this clone is fully responsive, mimicking the Apple home
              page not only on all screen sizes, but also during transition
              while resizing the screen. The project was built in React JSX,
              using components for modularity.
            </p>
          </div>
        </div>

        <Header />
        <IpadSection />
        <ProductsSection />
        <Footer />

      </div>
    );
  }
}

export default App;
