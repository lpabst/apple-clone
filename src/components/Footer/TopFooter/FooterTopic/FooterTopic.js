import React, { Component } from 'react';
import './FooterTopic.css';

class FooterTopic extends Component {
  constructor(props){
    super(props);

    this.state = {
      'shop': ['Shop and Learn', 'Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'iTunes', 'HomePod', 'iPod', 'Accessories', 'Gift Cards'],
      'store': ['Apple Store', 'Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Field Trip', 'Apple Store App', 'Refurbished and Clearance', 'Financing', 'Reuse and Recycling', 'Order Status', 'Shopping Help'],
      'education': ['For Education', 'Apple and Education', 'Shop for College'],
      'business': ['For Business', 'Apple and Business', 'Shop for Business'],
      'account': ['Account', 'Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
      'values': ['Apple Values', 'Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Supplier Responsibility'],
      'about': ['About Apple', 'Newsroom', 'Apple Leadership', 'Job Opportunities', 'Investors', 'Events', 'Contact Apple'],
    }
  }
  
  render() {
    let list = null;
    let showList = this.props.showList;
    
    list = 
      <div>
        <h1>{ this.state[showList][0] }</h1>
        {
          this.state[showList].map( (item, i) => {
            return <p key={i} >{item}</p>
          })
        }
          
      </div>
    
    return (
        <section className='footer_topic'>

          { list }
            
        </section>
    );
  }

}

export default FooterTopic;