import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../../actions/actions';
import RenderStep from '../RenderStep';

class StepTwo extends Component {
  componentDidMount() {
    this.props.dispatch(actions.postPersonData('Sean', 'New York'));
  }

  render() {
    console.log(this.props.error)
    return (
      <div>
        <RenderStep
          taskTitle={'POST request to \'/people\' endpoint'}
          sentJson={{name: 'Sean', favoriteCity: 'New York'}}
          messageFromServer={this.props.message}
          errorFromServer={this.props.error}
          serverStatusResponse={this.props.serverStatusResponse}
        />
      </div>
    )
  }
}

export default connect(
  ({ people, message, error, serverStatusResponse }) =>
  ({ people, message, error, serverStatusResponse })
)(StepTwo);
