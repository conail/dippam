import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './modules/routes'

// Force CSS to load.  This should use extract text in production.
import styles from './sass/App.sass'

const API_BASE = "http://localhost:3000"

//var get = new Promise(function(resolve, reject) {
//  var xhr = new XMLHttpRequest();
//  xhr.open('get', `${API_BASE}/collections`);
//  xhr.send();
//  xhr.onload = () => (this.status >= 200 && this.status < 300) ?
//    resolve(this.response) : reject(this.statusText)
//  xhr.onerror = () => reject(this.statusText)
//});

render(<Router routes={routes} history={browserHistory}/>, document.querySelector("#app"))



















