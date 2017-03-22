import fetch from 'isomorphic-fetch';

export const SERVER_STATUS_RESPONSE = 'SERVER_STATUS_RESPONSE';
export const serverStatusResponse = (statusCode, statusText) => {
    return {
        type: SERVER_STATUS_RESPONSE,
        payload: {statusCode, statusText}
    };
}

export const FETCH_PEOPLEDATABASE_SUCCESS = 'FETCH_PEOPLEDATABASE_SUCCESS';
export const fetchPeopleDatabaseSuccess = peopleArray => {
    return {
        type: FETCH_PEOPLEDATABASE_SUCCESS,
        payload: peopleArray
    };
};

export const FETCH_PEOPLEDATABASE_ERROR = 'FETCH_PEOPLEDATABASE_ERROR';
export const fetchPeopleDatabaseError = error => {
    return {
        type: FETCH_PEOPLEDATABASE_ERROR,
        payload: error
    };
}

const FETCH_PEOPLEDATABASE = 'FETCH_PEOPLE_DATABASE';
export const fetchPeopleDatabase = () => {
  return (dispatch) => {
  	return fetch('http://localhost:3000/people')
  	.then(response => response.json()
    .then(json => ({ json, response })))
  	.then(({json, response}) => {
      dispatch(serverStatusResponse(response.status, response.statusText));
  		if (response.ok === false) {
  		  return Promise.reject(json);
  		}
  		return json;
  	})
  	.then(data => {
  		return dispatch(fetchPeopleDatabaseSuccess(data))
  	})
  	.catch(err => dispatch(fetchPeopleDatabaseError(err)));
  }
};

export const FETCH_SPECIFIC_PERSON_DATA_SUCCESS = 'FETCH_SPECIFIC_PERSON_DATA_SUCCESS';
export const fetchSpecificPersonDataSuccess = (personArray, currentPeopleArray) => {
    return {
        type: FETCH_SPECIFIC_PERSON_DATA_SUCCESS,
        payload: [personArray, currentPeopleArray]
    };
};

export const FETCH_SPECIFIC_PERSON_DATA_ERROR = 'FETCH_SPECIFIC_PERSON_DATA_ERROR';
export const fetchSpecificPersonDataError = error => {
    return {
        type: FETCH_SPECIFIC_PERSON_DATA_ERROR,
        payload: error
    };
}

const FETCH_SPECIFIC_PERSON_DATA = 'FETCH_SPECIFIC_PERSON_DATA';
export const fetchSpecificPersonData = personId => {
  return (dispatch, getState) => {
  	return fetch('http://localhost:3000/people' + personId)
  	.then(response => response.json().then(json => ({ json, response })))
  	.then(({json, response}) => {
  		if (response.ok === false) {
  		  return Promise.reject(json);
  		}
  		return json;
  	})
  	.then(data => {
  		dispatch(fetchSpecificPersonDataSuccess(data, getState().people))
  	})
  	.catch(err => dispatch(fetchSpecificPersonDataError(err)));
  }
};

export const POST_PERSON_DATA_SUCCESS = 'POST_PERSON_DATA_SUCCESS';
export const postPersonDataSuccess = successMessage => {
    return {
        type: POST_PERSON_DATA_SUCCESS,
        payload: successMessage
    };
};

export const POST_PERSON_DATA_ERROR = 'POST_PERSON_DATA_ERROR';
export const postPersonDataError = error => {
    return {
        type: POST_PERSON_DATA_ERROR,
        payload: error
    };
}

const POST_PERSON_DATA = 'POST_PERSON_DATA';
export const postPersonData = (name, favoriteCity) => {
  return (dispatch) => {
  	return fetch('http://localhost:3000/people',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({name: name, favoriteCity: favoriteCity})
      }
    )
    .then(response => response.json()
    .then(json => ({ json, response })))
  	.then(({json, response}) => {
      dispatch(serverStatusResponse(response.status, response.statusText));
  		if (response.ok === false) {
  		  return Promise.reject(json);
  		}
  		return json;
  	})
  	.then(data => {
  		return dispatch(postPersonDataSuccess(data))
  	})
  	.catch(err => dispatch(postPersonDataError(err)));
  }
};

export const PUT_PERSON_DATA_SUCCESS = 'PUT_PERSON_DATA_SUCCESS';
export const putPersonDataSuccess = successMessage => {
    return {
        type: PUT_PERSON_DATA_SUCCESS,
        payload: successMessage
    };
};

export const PUT_PERSON_DATA_ERROR = 'PUT_PERSON_DATA_ERROR';
export const putPersonDataError = error => {
    return {
        type: PUT_PERSON_DATA_ERROR,
        payload: error
    };
}

const PUT_PERSON_DATA = 'PUT_PERSON_DATA';
export const putPersonData = (personId, name, favoriteCity) => {
  return (dispatch) => {
  	return fetch('http://localhost:3000/people',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({_id: personId, name: name, favoriteCity: favoriteCity})
      }
    )
    .then(response => response.json()
    .then(json => ({ json, response })))
  	.then(({json, response}) => {
      dispatch(serverStatusResponse(response.status, response.statusText));
  		if (response.ok === false) {
  		  return Promise.reject(json);
  		}
  		return json;
  	})
  	.then(data => {
  		return dispatch(putPersonDataSuccess(data))
  	})
  	.catch(err => dispatch(putPersonDataError(err)));
  }
};

export const DELETE_PERSON_DATA_SUCCESS = 'DELETE_PERSON_DATA_SUCCESS';
export const deletePersonDataSuccess = successMessage => {
    return {
        type: DELETE_PERSON_DATA_SUCCESS,
        payload: successMessage
    };
};

export const DELETE_PERSON_DATA_ERROR = 'DELETE_PERSON_DATA_ERROR';
export const deletePersonDataError = error => {
    return {
        type: DELETE_PERSON_DATA_ERROR,
        payload: error
    };
}

const DELETE_PERSON_DATA = 'DELETE_PERSON_DATA';
export const deletePersonData = (personId) => {
  return (dispatch) => {
  	return fetch('http://localhost:3000/people/' + personId,
      {
        method: 'DELETE',
      }
    )
    .then(response => response.json()
    .then(json => ({ json, response })))
  	.then(({json, response}) => {
      dispatch(serverStatusResponse(response.status, response.statusText));
  		if (response.ok === false) {
  		  return Promise.reject(json);
  		}
  		return json;
  	})
  	.then(data => {
  		return dispatch(deletePersonDataSuccess(data))
  	})
  	.catch(err => dispatch(deletePersonDataError(err)));
  }
};
