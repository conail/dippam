import React from 'react';

export default class AppFooter extends React.Component {
  render() {
    return <footer>
      <div className="sponsors">
        <h1>Sponsors</h1>
        <ul>
	  <li>Queen's University Belfast</li>
	  <li>The Mellon Centre</li>
	  <li>Arts and Humanities Research Council</li>
	  <li>University of Ulster</li>
	  <li>Libraries NI</li>
        </ul>
      </div>
    </footer>;
  }
}