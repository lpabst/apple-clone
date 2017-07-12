import React, { Component } from 'react';
import './TopFooter.css';

import FooterTopic from './FooterTopic/FooterTopic.js';

class TopFooter extends Component {

  render() {
    return (
        <section className='top_footer'>
          <ul className='top_footer_list'>

            <FooterTopic showList={'shop'} />

            <FooterTopic showList={'store'} />

            <div className='top_footer_column'>
              <FooterTopic showList={'education'} />
              <FooterTopic showList={'business'} />
            </div>

            <div className='top_footer_column'>
              <FooterTopic showList={'account'} />
              <FooterTopic showList={'values'} />
            </div>

            <FooterTopic showList={'about'} />

          </ul>
        </section>
    );
  }

}

export default TopFooter;