import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App    from './App';
import AboutPage  from './pages/AboutPage';
import HomePage   from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import CollectionPage from './pages/CollectionPage';
import EthicalUsePolicyPage from './pages/EthicalUsePolicyPage';
import DocumentPage from './pages/DocumentPage';

module.exports = <Route path="/" component={App}>
  <IndexRoute component={HomePage}/>
  <Route path="/search" component={SearchPage}/>
  <Route path="/search/:query" component={SearchPage}/>
  <Route path="/about" component={AboutPage}/>
  <Route path="/collections" component={HomePage}/>
  <Route path="/collections/:collection" component={CollectionPage}/>
  <Route path="/collections/:collection/search" component={SearchPage}/>
  <Route path="/collections/:collection/search/:query" component={SearchPage}/>
  <Route path="/policies/ethical-use" component={EthicalUsePolicyPage}/>
  <Route path="/document/:id" component={DocumentPage}/>
</Route>;