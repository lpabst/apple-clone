import React, { Component } from 'react';
import './Footer.css';

import TopFooter from './TopFooter/TopFooter.js';
import BottomFooter from './BottomFooter/BottomFooter.js';

class Footer extends Component {
  render() {
    return (

        <section className='footer'>
            <TopFooter />
            <BottomFooter />
        </section>
        
    );
  }
}

export default Footer;