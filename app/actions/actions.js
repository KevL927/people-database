import fetch from 'isomorphic-fetch';

export const FETCH_PEOPLEDATABASE_SUCCESS = 'FETCH_PEOPLEDATABASE_SUCCESS';
export const fetchPeopleDatabaseSuccess = peopleArray => {
    return {
        type: FETCH_PEOPLEDATABASE_SUCCESS,
        people: peopleArray
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
export const fetchPeopleDatabase = () => dispatch => {
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
};
