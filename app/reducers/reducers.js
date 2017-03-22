import update from 'react-addons-update';

const initialState = {
	people: null,
	message: null,
	error: null,
	postPutReturnedObjectId: null,
	serverStatusResponse: null
}

export default (state, action) => {
	state = state || initialState;

  switch(action.type) {
    case 'RESET_TO_INITIAL_STATE':
      return Object.assign({}, state, initialState);

    case 'SERVER_STATUS_RESPONSE':
      return Object.assign({}, state, {
	serverStatusResponse: action.payload
      });

    case 'FETCH_PEOPLEDATABASE_SUCCESS':
      return Object.assign({}, state, {
        people: action.payload
      });

    case 'FETCH_PEOPLEDATABASE_ERROR':
      return Object.assign({}, state, {
          error: action.payload
      });

    case 'FETCH_SPECIFIC_PERSON_DATA_SUCCESS':
      let personIndexLocation = action.payload[1].findIndex(person => person._id === action.payload[0]._id);

      let newPeopleArray = [
        ...action.payload[1].slice(0, personIndexLocation),
	action.payload[0],
	...action.payload[1].slice(personIndexLocation+1)
      ];

      let updatePeopleArray = update(action.payload[1], {$set: newPeopleArray});

      return Object.assign({}, state, {
				people: updatePeopleArray
      });

    case 'FETCH_SPECIFIC_PERSON_DATA_ERROR':
      return Object.assign({}, state, {
				error: action.payload.error
    });

    case 'POST_PERSON_DATA_SUCCESS':
      return Object.assign({}, state, {
				message: action.payload.message,
				people: action.payload.people[0],
				postPutReturnedObjectId: action.payload.people[0].id
      });

    case 'POST_PERSON_DATA_ERROR':
      return Object.assign({}, state, {
				error: action.payload.error
      });

    case 'PUT_PERSON_DATA_SUCCESS':
      return Object.assign({}, state, {
				message: action.payload.message
      });

    case 'PUT_PERSON_DATA_ERROR':
      return Object.assign({}, state, {
				error: action.payload.error
      });

    case 'DELETE_PERSON_DATA_SUCCESS':
      return Object.assign({}, state, {
				message: action.payload.message
      });

    case 'DELETE_PERSON_DATA_ERROR':
      return Object.assign({}, state, {
				error: action.payload.error
      });

    default:
      return state;
  }
}
