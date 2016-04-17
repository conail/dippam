import React from "react"
import {Router, Route, browserHistory, IndexRoute} from "react-router"
import App from "./app/app"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import CollectionPage from "./pages/CollectionPage"
import DocumentPage from "./pages/DocumentPage"
import MarkdownPage from "./pages/MarkdownPage"

module.exports = <Route path="/" component={App}>
  <IndexRoute component={HomePage}/>
  <Route path="/search" component={SearchPage}/>
  <Route path="/search/:query" component={SearchPage}/>
  <Route path="/about" component={MarkdownPage}/>
  <Route path="/collections" component={HomePage}/>
  <Route path="/collections/:collection" component={CollectionPage}/>
  <Route path="/collections/:collection/search" component={SearchPage}/>
  <Route path="/collections/:collection/search/:query" component={SearchPage}/>
  <Route path="/policy/ethical-use" component={MarkdownPage}/>
  <Route path="/policy/privacy" component={MarkdownPage}/>
  <Route path="/document/:id" component={DocumentPage}/>
</Route>