import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

class DatabaseList extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchPeopleDatabase());
  }

  render(){
    return (
      <div className="container">
        <p>Welcome Aboard~!</p>
      </div>
    );
  }
}

export default connect()(DatabaseList);
