import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="header">

          <ul className='mobile_header'>
            <li className='ham header_icon'></li>
            <li className='home_icon header_icon'></li>
            <li className='shopping_bag header_icon'></li>
          </ul>
          
          <ul className='desktop_header'>
            <li className='home_icon header_icon'></li>
            <li className='header_words header_icon'>Mac</li>
            <li className='header_words header_icon'>iPad</li>
            <li className='header_words header_icon'>iPhone</li>
            <li className='header_words header_icon'>Watch</li>
            <li className='header_words header_icon'>TV</li>
            <li className='header_words header_icon'>Music</li>
            <li className='header_words header_icon'>Support</li>
            <li className='search_icon header_icon'></li>
            <li className='shopping_bag header_icon'></li>
          </ul>

        </div>
    );
  }
}

export default Header;
