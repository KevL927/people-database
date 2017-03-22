import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../../actions/actions';
import RenderStep from '../RenderStep';

class StepSix extends Component {
  componentDidMount() {
    this.props.dispatch(actions.resetPeopleMessageErrorServerStatusResponse());
    this.props.dispatch(actions.deletePersonData(this.props.postPutReturnedObjectId));
  }

  render() {
    return (
      <div>
        <RenderStep
          taskTitle={'DELETE request to \'/people/:personId\' (' + this.props.postPutReturnedObjectId + ') endpoint'}
          peopleObject={this.props.people}
          messageFromServer={this.props.message}
          serverStatusResponse={this.props.serverStatusResponse}
        />
      </div>
    )
  }
}

export default connect(
  ({ people, message, serverStatusResponse, postPutReturnedObjectId }) =>
  ({ people, message, serverStatusResponse, postPutReturnedObjectId })
)(StepSix);
