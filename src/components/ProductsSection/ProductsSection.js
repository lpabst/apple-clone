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
            <img src={ iphones } className='' />
          </div>

          <div className='product_container watches'>
            <img src={ watches } className='watches' />
          </div>

          <div className='product_container imacs'>
            <img src={ imacs } className='watches' />
          </div>

          <div className='product_container accessories'>
            <img src={ accessories } className='watches' />
          </div>

        </section>
    );
  }
}

export default ProductsSection;