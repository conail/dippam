import React, {Component} from 'react'
import CollectionShort from '../CollectionShort'
import * as json from 'json!../../data/collections.json'

export default class HomePage extends Component {
  render() {
    console.log(json)
    const [dippam, ...collections] = json.collections

    return <div id="home">
      <div>
        <h1>{dippam.title}</h1>
        <p>{dippam.description}</p>
      </div>
      <div id="collections">
        {collections.map(i => <CollectionShort key={i.id} {...i}/>)}
      </div>
      {this.props.children}
    </div>
  }
}
