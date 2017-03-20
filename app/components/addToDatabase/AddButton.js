import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = { showInput: false };
  }

  onClick() {
    this.setState({showInput: !this.state.showInput});
  }

  showForm() {
    return (
      <div>
        <form onSubmit={this.submitForm.bind(this)}>
          <label>
            Name:
            <input type="text" ref="nameInput" />
          </label>
          <label>
            Favorite City:
            <input type="text" ref="favoriteCityInput" />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }

  submitForm(event) {
    event.preventDefault();
    this.props.dispatch(actions.postPersonData(this.refs.nameInput.value, this.refs.favoriteCityInput.value));
    this.refs.nameInput.value = '';
    this.refs.favoriteCityInput.value = '';
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>
          Add Person
        </button>
        {
          this.state.showInput
            ? this.showForm()
            : null
        }
      </div>
    )
  }
};

export default connect()(AddButton);
