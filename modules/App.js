import React from 'react';
import NavLink from './NavLink';
import AppHeader from './AppHeader';

export default class App extends React.Component {
  render() {
    let year = new Date().getFullYear();

    return <div id="app">
      <AppHeader/>
      <main>
        {this.props.children}
      </main>
      <footer>
	<h1>Sponsors</h1>
	<ul>
	  <li>Queen's University Belfast</li>
	  <li>The Mellon Centre</li>
	  <li>Arts and Humanities Research Council</li>
	  <li>University of Ulster</li>
	  <li>Libraries NI</li>
	</ul>
      </footer>
    </div>;
  }
}