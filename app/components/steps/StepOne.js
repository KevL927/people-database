import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../../actions/actions';
import RenderStep from '../RenderStep';

class StepOne extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchPeopleDatabase());
  }

  render() {
    return (
      <div>
        <RenderStep
          taskTitle={'GET request to \'/people\' endpoint'}
          peopleObject={this.props.people}
          serverStatusResponse={this.props.serverStatusResponse}
        />
        <Link to="/steptwo">Next ></Link>
      </div>
    )
  }
}

export default connect(
  ({ people, serverStatusResponse }) =>
  ({ people, serverStatusResponse })
)(StepOne);
