import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions/actions';

class StepOne extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchPeopleDatabase());
  }

  renderServerStatusResponse() {
    if(this.props.serverStatusResponse) {
      return (
        <div>
          <h4>Status Code:</h4>
          <p>{this.props.serverStatusResponse.statusCode} - {this.props.serverStatusResponse.statusText}</p>
        </div>
      )
    } else {
      return null;
    }
  }

  renderJSONResponse() {
    if(this.props.people) {
      return (
        <div>
          <h4>JSON:</h4>
          <pre>{JSON.stringify(this.props.people, null, 2)}</pre>
        </div>
      )
    } else {
      return null;
    }
  }
        // <Link to="/steptwo">Perform Next Task ></Link>
  render() {
    return (
      <div>
        <div>
          <h4>Sending a GET request to '/people' endpoint</h4>
        </div>
        <div>
          <h2>Response from the server:</h2>
          {this.renderServerStatusResponse()}
          {this.renderJSONResponse()}
        </div>
      </div>
    )
  }
}

export default connect(
  ({ people, serverStatusResponse }) =>
  ({ people, serverStatusResponse })
)(StepOne);
