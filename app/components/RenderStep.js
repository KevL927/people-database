import React, { Component } from 'react';

export default class RenderStep extends Component {
  renderServerStatusResponse(props) {
    if (this.props.serverStatusResponse) {
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

  renderPeopleJson(props) {
    if (this.props.peopleObject) {
      return (
        <div>
          <h4>JSON:</h4>
          <pre>{JSON.stringify(this.props.peopleObject, null, 2)}</pre>
        </div>
      )
    } else {
        return null;
    }
  }

  render() {
    return (
      <div>
        <div>
          <h2>{this.props.taskTitle}</h2>
        </div>
        <div>
          <h3>Response from the server:</h3>
          {this.renderServerStatusResponse()}
          {this.renderPeopleJson()}
        </div>
      </div>
    )
  }
}
