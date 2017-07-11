import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <section className='footer'>

            <section className='top_footer'>

            </section>

            <section className='bottom_footer'>
              <p className='bf_shop_words'>More ways to shop: Visit an 
                <a href='https://www.apple.com/retail'> Apple Store</a>, 
                call 1-800-MY-APPLE, or 
                <a href='https://locate.apple.com'> find a reseller</a>.
              </p>

              <div className='usflag_div'>
                <div className='usflag_img'></div>
                <p>United States</p>
              </div>

              <p className='copyright_p'>Copyright &copy; 2017 Apple Inc. All rights reserved.</p>

              <ul className='bottom_footer_list'>
                <li>Privacy Policy</li>
                <li>|</li>
                <li>Terms of Use</li>
                <li>|</li>
                <li>Sales and Refunds</li>
                <li>|</li>
                <li>Legal</li>
                <li>|</li>
                <li>Site Map</li>
              </ul>

            </section>
            
        </section>
    );
  }
}

export default Footer;