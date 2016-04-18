import React, {Component} from 'react'
import {Link} from 'react-router'

export default class CollectionShort extends Component {
  render() {
    const URI = `/collections/${this.props.id}`
    const CLASS = `${this.props.id} collection`

    return <div className={CLASS}>
      <h2><Link to={URI}>{this.props.title}</Link></h2>
      <p>{this.props.description}</p>
      <Link to={URI}>Browse</Link>
    </div>
  }
}