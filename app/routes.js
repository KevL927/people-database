import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import StepOne from './components/steps/StepOne';
import StepTwo from './components/steps/StepTwo';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/stepone" component={StepOne} />
          <Route path="/steptwo" component={StepTwo} />
        </Route>
    </Router>
);
