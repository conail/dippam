import React, {Component} from 'react'
import NavLink from '../NavLink'
import Logo from '../Logo'
import {browserHistory} from 'react-router'
import Search from '../Search'

export default class AppHeader extends Component {
  constructor(props) {
    super(props)
    if (this.props.params.query) new Search().query(this.props.params.query)
  }

  render() {
    return <header>
      <NavLink to="/"><Logo {...this.props}/></NavLink>
      <nav id="primary"> 
        <NavLink to="/collections">Collections</NavLink>
	<NavLink to="/about">About</NavLink>
      	<NavLink to="/policy/ethical-use">Ethical Use</NavLink>
      </nav>
      <input
        name="q" type="search" placeholder="Search Query"
        onFocus={this.query} onChange={this.query}
        value={this.props.params.query} />
    </header>
  }

  query(e) {
    // Preserve any collection prefixes that might be present, e.g. /collections/ied/
    let prefix = /(^\/collections\/\w+)[\/.]*/.exec(location.pathname) || ''

    browserHistory.push(`${prefix}/search/${e.target.value}`)
    new Search().query(e.target.value)
  }
}

