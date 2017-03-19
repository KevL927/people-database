import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import DatabaseList from './components/DatabaseList';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/databaselist" component={DatabaseList} />
        </Route>
    </Router>
);
