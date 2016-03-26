import React from 'react';

export default class Logo extends React.Component {
  render() {
    return  <div id="logo">
      <svg viewBox="0 0 43 56">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopOpacity: '0.2'  }} />
            <stop offset="100%" style={{ stopOpacity: '1' }} />
          </linearGradient>
        </defs>
        <g>
          <path d="m 9,0  30,0  4,18 -30,0 z"/>
	  <path d="m 0,37 43,0 0,-18 -40,0 z"/>
	  <path d="m 8,38 35,0 -4,18 -37,0 z"/>
        </g>
      </svg>
      <h1>DIPPAM</h1>
    </div>;
  }
}