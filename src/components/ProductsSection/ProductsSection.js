import React, { Component } from 'react';
import './ProductsSection.css';

import iphones from './../../img/phones.png';
import watches from './../../img/watches.png';
import imacs from './../../img/imacs.png';
import accessories from './../../img/accessories.png';

class ProductsSection extends Component {
  render() {
    return (
        <section className='products_section'>

          <div className='product_container iphones'>
            <img src={ iphones } />
          </div>

          <div className='product_container watches'>
            <img src={ watches } />
          </div>

          <div className='product_container imacs'>
            <img src={ imacs } />
          </div>

          <div className='product_container accessories'>
            <img src={ accessories } />
          </div>

        </section>
    );
  }
}

export default ProductsSection;