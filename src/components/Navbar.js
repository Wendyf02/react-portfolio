import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
class Navbar extends Component {
  state = { }
  scrollToTop = () => {
    scroll.scrollToTop();
};

render() {
   return( 

    <nav>

        <ul> 
            <li><Link
                className='link'
                activeClass="active"
                to="homw"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.scrollToTop}
            >Home</Link></li>

             <li><Link
                className='link'
                activeClass="active"
                to="homw"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.scrollToTop}
            >About Me</Link></li>

            <li><Link
                className='link'
                activeClass="active"
                to="homw"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.scrollToTop}
            >Work</Link></li>

            <li><Link     
                className='link'
                activeClass="active"
                to="homw"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.scrollToTop}
            >Contact</Link></li>
        </ul>

    </nav> 

  );
 }

}

export default Navbar;