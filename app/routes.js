import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import StepOne from './components/steps/StepOne';
import StepTwo from './components/steps/StepTwo';
import StepThree from './components/steps/StepThree';
import StepFour from './components/steps/StepFour';
import StepFive from './components/steps/StepFive';
import StepSix from './components/steps/StepSix';
import StepSeven from './components/steps/StepSeven';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/stepone" component={StepOne} />
          <Route path="/steptwo" component={StepTwo} />
          <Route path="/stepthree" component={StepThree} />
          <Route path="/stepfour" component={StepFour} />
          <Route path="/stepfive" component={StepFive} />
          <Route path="/stepsix" component={StepSix} />
          <Route path="/stepseven" component={StepSeven} />
        </Route>
    </Router>
);
