import React from 'react';
import {Link} from 'react-router';

export default class CollectionShort extends React.Component {
  render() {
    return <div className={this.props.id + ' collection'}>
      <h2>{this.props.title}</h2>
      <p>{this.props.description}</p>
      <Link to={"/collections/"+this.props.id}>Browse</Link>
    </div>;
  }
}