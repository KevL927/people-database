import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../../actions/actions';
import RenderStep from '../RenderStep';

class StepFive extends Component {
  componentDidMount() {
    this.props.dispatch(actions.resetPeopleMessageErrorServerStatusResponse());
    this.props.dispatch(actions.fetchSpecificPersonData(this.props.postPutReturnedObjectId));
  }

  render() {
    return (
      <div>
        <RenderStep
          taskTitle={'GET request to \'/people/:personId\' (' + this.props.postPutReturnedObjectId + ') endpoint'}
          peopleObject={this.props.people}
          serverStatusResponse={this.props.serverStatusResponse}
        />
        <Link to="/stepsix">Next ></Link>
      </div>
    )
  }
}

export default connect(
  ({ people, serverStatusResponse, postPutReturnedObjectId }) =>
  ({ people, serverStatusResponse, postPutReturnedObjectId })
)(StepFive);
