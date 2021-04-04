import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class About extends Component {

  state = { }
  render() {

        return (
            <div className='about'>
            <div className='about-cpntent'>
            <h1><Fade bottom cascade>About Me</Fade></h1> 
            <Fade bottom> 
                 <p>{data.abouttext}</p>
                </Fade> 

                </div> 
              {data.showAboutImage ? <img src={data.about.Image} alt='about image'></img> : null }
                
            </div>
        );

  }

}

export default About;