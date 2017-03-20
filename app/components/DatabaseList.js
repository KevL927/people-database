import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import PersonObject from './renderPersonData/PersonObject';

class DatabaseList extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchPeopleDatabase());
  //  this.props.dispatch(actions.putPersonData('58ce201e95362d0d6380f63a', 'drgdrg', 'nfstdrth'));
  }

  renderChildComponents() {
    if(this.props.people) {
      return (
        <div><PersonObject peopleObject={this.props.people} /></div>
      )
    } else {
      return <div>No person in database</div>;
    }
  }

  render(){
    console.log(this.props.people);
    return (
      <div className="container">
        {this.renderChildComponents()}
      </div>
    );
  }
}

export default connect(
  ({ people }) =>
  ({ people })
)(DatabaseList);
