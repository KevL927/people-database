import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import StepOne from './components/StepOne';
import DatabaseList from './components/DatabaseList';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/stepone" component={StepOne} />
          <Route path="/databaselist" component={DatabaseList} />
        </Route>
    </Router>
);
