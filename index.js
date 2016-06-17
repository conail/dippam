// Force CSS to load.  This should use extract text in production.
import styles from "./sass/App.sass";
import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import App from "./modules/app/app";
import HomePage from "./modules/pages/HomePage";
import SearchPage from "./modules/pages/SearchPage";
import CollectionPage from "./modules/pages/CollectionPage";
import DocumentPage from "./modules/pages/DocumentPage";
import MarkdownPage from "./modules/pages/MarkdownPage";

render(<Router history={browserHistory}>
  <Route path="/" component={App}>
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
</Router>, document.querySelector("#app"));















