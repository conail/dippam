import React from 'react';
import NavLink from './NavLink';

export default class App extends React.Component {
  render() {
    let year = new Date().getFullYear();

    return <div id="app">
      <header>
	<svg id="logo" viewbox="0 0 43 56">
	  <g>
	    <path d="m 9,0  30,0  4,18 -30,0 z"/>
	    <path d="m 0,37 43,0 0,-18 -40,0 z"/>
	    <path d="m 8,38 35,0 -4,18 -37,0 z"/>
	  </g>
	</svg>
	<h1><a href="/">DIPPAM</a></h1> 
	<nav id="primary"> 
	  <ul> 
	    <li class="collections">
	      <a href="">Collections</a>
	      <ul>
		<li class="eppi"><a href="/eppi">EPPI Collection</a></li>
		<li class="ied"><a href="/ied">IED Collection</a></li> 
		<li class="vmr"><a href="/vmr">VMR Collection</a></li>
	      </ul>
	    </li>
	    <li class="about"><a href="">About</a>
              <ul>
		<li><a href="/the-project">Project Team</a></li> 
		<li><a href="/contact">Contact</a></li>
	      </ul>
            </li>
	    <li class="ethical"><a href="/ethical-use-policy">Ethical Use</a></li> 
	  </ul>
	</nav>
	<input name="q" type="search" placeholder="Query" />
      </header>
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