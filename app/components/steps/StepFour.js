import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../../actions/actions';
import RenderStep from '../RenderStep';

class StepFour extends Component {
  componentDidMount() {
    this.props.dispatch(actions.resetPeopleMessageErrorServerStatusResponse());
    this.props.dispatch(actions.putPersonData(this.props.postPutReturnedObjectId, 'Brooklyn'));
  }

  render() {
    return (
      <div>
        <RenderStep
          taskTitle={'PUT request to \'/people\' endpoint'}
          sentJson={{id: this.props.postPutReturnedObjectId, favoriteCity: 'Brooklyn'}}
          messageFromServer={this.props.message}
          errorFromServer={this.props.error}
          serverStatusResponse={this.props.serverStatusResponse}
          peopleObject={this.props.people}
        />
        <Link to="/stepfive">Next ></Link>
      </div>
    )
  }
}

export default connect(
  ({ people, message, error, serverStatusResponse, postPutReturnedObjectId }) =>
  ({ people, message, error, serverStatusResponse, postPutReturnedObjectId })
)(StepFour);
