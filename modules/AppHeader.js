import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';

export default class AppHeader extends React.Component {
  render() {
    return <header>
      <NavLink to="/"><Logo/></NavLink>
      <nav id="primary"> 
        <ul> 
          <li>
	    <NavLink to="/collections">Collections</NavLink>
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