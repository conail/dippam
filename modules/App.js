import React from 'react';
import NavLink from './NavLink';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export default class App extends React.Component {
  render() {
    let year = new Date().getFullYear();

    return <div id="app" className={this.props.params.collection}>
      <AppHeader/>
      <main>
        {this.props.children}
      </main>
      <AppFooter/>
    </div>;
  }
}