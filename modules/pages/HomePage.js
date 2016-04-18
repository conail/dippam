import React, {Component} from 'react'
import CollectionShort from '../CollectionShort'

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = require('json!../../data/collections.json')
  }

  render() {
    const [dippam, ...collections] = this.state.collections

    return <div id="home">
      <div>
        <h1>{dippam.title}</h1>
        <p>{dippam.description}</p>
      </div>
      <div id="collections">
        { collections.map((i) => {return <CollectionShort key={i.id} {...i}/>}) }
      </div>
      {this.props.children}
    </div>
  }
}
