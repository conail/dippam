import React from 'react';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = require('json!../../data/collections.json');
  }

  render() {
    const [dippam, ...collections]  = this.state.collections;

    return <div id="home">
      <div>
        <h1>{dippam.title}</h1>
        <p>{dippam.description}</p>
      </div>
      <div id="collections">
        { collections.map(i => <Collection key={i.id} {...i}/>) }
      </div>
      {this.props.children}
    </div>;
  }
}

class Collection extends React.Component {
  render() {
    return <div className={this.props.id + ' collection'}>
      <h2>{this.props.title}</h2>
      <p>{this.props.description}</p>
      <button>Browse</button>
    </div>;
  }
}