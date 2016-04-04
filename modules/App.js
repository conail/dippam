import React from 'react';
import NavLink from './NavLink';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        query: '',
        facets: [],
        results: []
      }
    };
  }

  render() {
    let year = new Date().getFullYear();

    return <div id="app" className={this.props.params.collection}>
      <AppHeader {...this.props}/>
      <main>
        {this.props.children}
      </main>
      <AppFooter/>
    </div>;
  }
}