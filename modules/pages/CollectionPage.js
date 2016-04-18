import React, {Component} from 'react'

export default class CollectionPage extends Component {
  render() {
    return <div className="collection">
      <h1>{this.props.params.collection}</h1>
    </div>
  }
}