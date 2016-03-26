import React from 'react';

export default class Logo extends React.Component {
  render() {
    return  <svg id="logo" viewBox="0 0 43 56">
      <g>
        <path d="m 9,0  30,0  4,18 -30,0 z"/>
	<path d="m 0,37 43,0 0,-18 -40,0 z"/>
	<path d="m 8,38 35,0 -4,18 -37,0 z"/>
      </g>
    </svg>;
  }
}