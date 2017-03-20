import fetch from 'isomorphic-fetch';

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
  	.then(response => response.json().then(json => ({ json, response })))
  	.then(({json, response}) => {
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
  	return fetch('http://localhost:3000/people/' + personId)
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
  	.then(res => {
  		return res.json();
  	})
    .then(data => {
      dispatch(postPersonDataSuccess(data));
      dispatch(fetchPeopleDatabase());
    })
  	.catch(err => dispatch(postPersonDataError(err)));
  }
};
