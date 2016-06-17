import React, {Component} from 'react';
import {Link} from 'react-router';

const CollectionShort = (props) => <div className="{props.id} collection">
  <h2><Link to={"/collections/"+props.name}>{props.title}</Link></h2>
  <p>{props.description}</p>
  <Link to={"/collections/"+props.name}>Browse</Link>
</div>;

export default CollectionShort;
