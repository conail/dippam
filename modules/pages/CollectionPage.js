import React from 'react';

export default class CollectionPage extends React.Component {
  render() {
    return <div className="collection">
      <h1>{this.props.params.collection}</h1>
      
    </div>;
  }
}