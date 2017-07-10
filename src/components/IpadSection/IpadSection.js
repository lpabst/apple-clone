import React, { Component } from 'react';
import './IpadSection.css';

import iPadImage from './../../img/ipad_img.png';

class IpadSection extends Component {
  render() {
    return (
        <section className='ipad_section'>

            <div className='ipad_words'>
              <h2>iPad Pro</h2>
              <p>Anything you can do,</p>
              <p>you can do better</p>
            </div>

            {/*<div className='ipad_img'></div>*/}
            <img src={ iPadImage } className='ipad_img' />
            
        </section>
    );
  }
}

export default IpadSection;


