import React from 'react'
import NavLink from './NavLink'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const App = () => <div className={this.props.params.collection}>
  <AppHeader {...this.props}/>
  <main>
    {this.props.children}
  </main>
  <AppFooter/>
</div>

export default App
