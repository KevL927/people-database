import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import PersonObject from './renderPersonData/PersonObject';
import AddButton from './addToDatabase/AddButton';

class DatabaseList extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchPeopleDatabase());
  //  this.props.dispatch(actions.putPersonData('58ce201e95362d0d6380f63a', 'drgdrg', 'nfstdrth'));
  }

  onClickDeletePersonData(event, personId) {
    event.preventDefault();
    this.props.dispatch(actions.deletePersonData(personId));
  }

  renderChildComponents() {
    if(this.props.people) {
      return (
        <div>
          <PersonObject
            peopleObject={this.props.people}
            onClickDeletePersonData={this.onClickDeletePersonData.bind(this)}
          />
        </div>
      )
    } else {
      return <div>No person in database</div>;
    }
  }

  render(){
    return (
      <div className="container">
        <div>
          {this.renderChildComponents()}
        </div>
        <div>
          <AddButton />
        </div>
      </div>
    );
  }
}

export default connect(
  ({ people }) =>
  ({ people })
)(DatabaseList);
