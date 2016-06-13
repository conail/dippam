import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './modules/routes';

// Force CSS to load.  This should use extract text in production.
import styles from './sass/App.sass';

render(<Router routes={routes} history={browserHistory}/>,
       document.querySelector("#app"));



















