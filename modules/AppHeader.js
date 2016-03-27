import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';

export default class AppHeader extends React.Component {
  render() {
    return <header>
      <NavLink to="/"><Logo {...this.props}/></NavLink>
      <nav id="primary"> 
        <NavLink to="/collections">Collections</NavLink>
	<NavLink to="/team">About</NavLink>
      	<NavLink to="/policies/ethical-use">Ethical Use</NavLink>
      </nav>
      <input name="q" type="search" placeholder="Search Query" />
    </header>;
  }
}