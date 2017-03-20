import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import PersonObject from './renderPersonData/PersonObject';
import AddButton from './addToDatabase/AddButton';

class DatabaseList extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchPeopleDatabase());
  }

  constructor(props) {
    super(props);
    this.state = { showEditInput: false, personId: null, name: null, favoriteCity: null };
  }

  handleChange () {
     this.setState({name: this.refs.nameInput.value, favoriteCity: this.refs.favoriteCityInput.value});
  }

  showEditForm(personId, name, favoriteCity) {
    return (
      <div>
        <form onSubmit={this.onClickEditPersonData.bind(this)}>
          <label>
            Name:
            <input type="text" ref="nameInput" placeholder={this.state.name} onChange={this.handleChange.bind(this)} />
          </label>
          <label>
            Favorite City:
            <input type="text" ref="favoriteCityInput" placeholder={this.state.favoriteCity} onChange={this.handleChange.bind(this)} />
          </label>
          <input type="submit" value="Edit" />
        </form>
      </div>
    )
  }

  onClickEditPersonData(event) {
   event.preventDefault();
   this.props.dispatch(actions.putPersonData(this.state.personId, this.state.name, this.state.favoriteCity));
  }

  onClickEdit(event, personId, name, favoriteCity) {
    event.preventDefault();
    this.setState({showEditInput: !this.state.showInput, personId: personId, name: name, favoriteCity: favoriteCity});
    this.showEditForm(personId, name, favoriteCity);
    this.refs.nameInput.value = '';
    this.refs.favoriteCityInput.value = '';
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
            onClickEdit={this.onClickEdit.bind(this)}
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
        {
          this.state.showEditInput
            ? this.showEditForm()
            : null
        }
      </div>
    );
  }
}

export default connect(
  ({ people }) =>
  ({ people })
)(DatabaseList);
