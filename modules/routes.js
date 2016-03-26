import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App    from './App';
import About  from './pages/AboutPage';
import Home   from './pages/HomePage';
import Search from './pages/SearchPage';

module.exports = <Route path="/" component={App}>
  <IndexRoute component={Home}/>
  <Route path="/search" component={Search}/>
  <Route path="/about" component={About}/>
  <Route path="/collections" component={Home}/>
</Route>;
