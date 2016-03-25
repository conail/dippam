import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './modules/routes';
import styles from './sass/App.sass';

render(<Router routes={routes} history={browserHistory}/>, document.body.children[0]);