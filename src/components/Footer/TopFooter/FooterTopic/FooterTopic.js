import React, { Component } from 'react';
import './FooterTopic.css';

class FooterTopic extends Component {
  constructor(props){
    super(props);

    this.state = {
      shop: ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'iTunes', 'HomePod', 'iPod', 'Accessories', 'Gift Cards'],
      store: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Field Trip', 'Apple Store App', 'Refurbished and Clearance', 'Financing', 'Reuse and Recycling', 'Order Status', 'Shopping Help'],
      education: ['Apple and Education', 'Shop for College'],
      business: ['Apple and Business', 'Shop for Business'],
      account: [],
      values: [],
      about: [],
    }
  }
  
  render() {
    let list = null;
    if (this.props.showList === 'shop'){
      list = 
        <section className='footer_topic'>
          <h1>Shop and Learn</h1>
          <p>
            
        </section>
    }
    return (
        <section className='footer_topic'>

            
            
        </section>
    );
  }

}

export default FooterTopic;