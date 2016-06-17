import React, {Component} from "react";
import CollectionShort from "../CollectionShort";

export default class HomePage extends Component {
  render() {
    if (! this.props.collections) return <p></p>;
    const [dippam, ...collections] = this.props.collections;
    return <div id="home">
      <div>
        <h1>{dippam.name}</h1>
        <p>{dippam.description}</p>
      </div>
      <div id="collections">
        {collections.map(i => <CollectionShort key={i.id} {...i}/>)}
      </div>
      {this.props.children}
    </div>
  }
}
