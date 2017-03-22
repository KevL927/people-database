import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../../actions/actions';
import RenderStep from '../RenderStep';

class StepFive extends Component {
  componentDidMount() {
    this.props.dispatch(actions.resetPeopleMessageErrorServerStatusResponse());
    this.props.dispatch(actions.fetchPeopleDatabase2());
  }

  render() {
    return (
      <div>
        <RenderStep
          taskTitle={'GET request to \'/people\'/1 endpoint'}
          peopleObject={this.props.people}
          serverStatusResponse={this.props.serverStatusResponse}
        />
      </div>
    )
  }
}

export default connect(
  ({ people, serverStatusResponse }) =>
  ({ people, serverStatusResponse })
)(StepFive);
