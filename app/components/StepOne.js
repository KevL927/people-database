import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions/actions';

class StepOne extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchPeopleDatabase());
  }

  renderResponse() {
    if(this.props.people) {
      return (
        <div>
          <h4>Status Code:</h4>
          <h4>JSON:</h4>
          {JSON.stringify(this.props.people)}
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
          <h4>Response from the server:</h4>
          {this.renderResponse()}
        </div>
      </div>
    )
  }
}

export default connect(
  ({ people }) =>
  ({ people })
)(StepOne);
