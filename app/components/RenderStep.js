import React, { Component } from 'react';

import * as actions from '../actions/actions';

export default class RenderStep extends Component {
  renderServerStatusResponse() {
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

  renderSentJson() {
    if (this.props.sentJson) {
      return (
        <div>
          <h5>with following JSON body:</h5>
          <pre>{JSON.stringify(this.props.sentJson, null, 2)}</pre>
        </div>
      )
    } else {
        return null;
    }
  }

  renderMessageResponseFromServer() {
    if (this.props.messageFromServer) {
      return (
        <div>
          <h4>Message:</h4>
          <p>{this.props.messageFromServer}</p>
        </div>
      )
    } else {
        return null;
    }
  }

  renderJsonResponseFromServer() {
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

  renderErrorResponseFromServer() {
    if (this.props.errorFromServer) {
      return (
        <div>
          <p>{this.props.errorFromServer}</p>
        </div>
      )
    }
    else {
        return null;
    }
  }

  render() {
    return (
      <div>
        <div>
          <h3>Sending to server:</h3>
          <h4>{this.props.taskTitle}</h4>
          {this.renderSentJson()}
        </div>
        <div>
          <h3>Response from server:</h3>
          {this.renderServerStatusResponse()}
          {this.renderErrorResponseFromServer()}
          {this.renderMessageResponseFromServer()}
          {this.renderJsonResponseFromServer()}
        </div>
      </div>
    )
  }
}
