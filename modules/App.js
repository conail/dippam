import React, {Component} from 'react'
import NavLink from './NavLink'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: {
        query: '',
        facets: [],
        results: []
      }
    }
  }

  render() {
    return <div id="app" className={this.props.params.collection}>
      <AppHeader {...this.props}/>
      <main>
        {this.props.children}
      </main>
      <AppFooter/>
    </div>
  }
}
