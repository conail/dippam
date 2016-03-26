import React from 'react';
import NavLink from './NavLink';

export default class AppHeader extends React.Component {
  render() {
    return <header>
      <svg id="logo" viewBox="0 0 43 56">
        <g>
	  <path d="m 9,0  30,0  4,18 -30,0 z"/>
	  <path d="m 0,37 43,0 0,-18 -40,0 z"/>
	  <path d="m 8,38 35,0 -4,18 -37,0 z"/>
	</g>
      </svg>
      <h1><a href="/">DIPPAM</a></h1> 
      <nav id="primary"> 
        <ul> 
          <li className="collections">
	    <a href="">Collections</a>
	    <ul>
              <li><NavLink to="/collections/eppi">EPPI Collection</NavLink></li>
	      <li><NavLink to="/collections/ied">IED Collection</NavLink></li> 
	      <li><NavLink to="/collections/vmr">VMR Collection</NavLink></li>
	    </ul>
	  </li>
	  <li className="about"><a href="">About</a>
            <ul>
	      <li><a href="/the-project">Project Team</a></li> 
	      <li><a href="/contact">Contact</a></li>
	    </ul>
          </li>
	  <li className="ethical"><a href="/ethical-use-policy">Ethical Use</a></li> 
        </ul>
      </nav>
      <input name="q" type="search" placeholder="Query" />
    </header>;
  }
}