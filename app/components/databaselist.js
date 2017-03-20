import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

class DatabaseList extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchPeopleDatabase());
   this.props.dispatch(actions.putPersonData('58ce201e95362d0d6380f63a', 'hello', 'mr'));
  }

  render(){
    console.log(this.props.people);
    return (
      <div className="container">
        <p>Welcome Aboard~!</p>
      </div>
    );
  }
}

export default connect(
  ({ people }) =>
  ({ people })
)(DatabaseList);
