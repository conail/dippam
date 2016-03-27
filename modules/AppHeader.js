import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';

export default class AppHeader extends React.Component {
  render() {
    return <header>
      <NavLink to="/"><Logo {...this.props}/></NavLink>
      <nav id="primary"> 
        <ul> 
          <li>
	    <NavLink to="/collections">Collections</NavLink>
	    <ul>
              <li><NavLink to="/collections/eppi">EPPI: Enhanced British Parliamentary Papers on Ireland</NavLink></li>
	      <li><NavLink to="/collections/ied">IED: Irish Emigration Database</NavLink></li> 
	      <li><NavLink to="/collections/vmr">VMR: Voices of Migration and Return</NavLink></li>
	    </ul>
	  </li>
	  <li className="about"><a href="">About</a>
            <ul>
	      <li><NavLink to="/about/team">Project Team</NavLink></li> 
	      <li><a href="/contact">Contact</a></li>
	    </ul>
          </li>
	  <li><NavLink to="/policies/ethical-use">Ethical Use</NavLink></li> 
        </ul>
      </nav>
      <input name="q" type="search" placeholder="Search Query" />
    </header>;
  }
}