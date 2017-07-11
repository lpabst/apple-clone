import React, { Component } from 'react';
import './Footer.css';

import BottomFooter from './BottomFooter/BottomFooter.js';

class Footer extends Component {
  render() {
    return (
        <section className='footer'>

            <section className='top_footer'>

            </section>
            <BottomFooter />
            
        </section>
    );
  }
}

export default Footer;