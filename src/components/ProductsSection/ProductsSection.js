import React, { Component } from 'react';
import './ProductsSection.css';

class ProductsSection extends Component {
  render() {
    return (
        <section className='products_section'>

          <div className='product_container iphones'>
          </div>

          <div className='product_container watches'>
          </div>

          <div className='product_container imacs'>
          </div>

          <div className='product_container accessories'>
          </div>

        </section>
    );
  }
}

export default ProductsSection;