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
		case 'CLEAR_STATE':
			return Object.assign({}, state, initialState);

    case 'RESET_PEOPLE_MESSAGE_ERROR_SERVERSTATUSRESPONSE':
      return Object.assign({}, state, {
				people: null,
				message: null,
				error: null,
				serverStatusResponse: null
			});

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
      return Object.assign({}, state, {
				people: action.payload.people[0]
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
				message: action.payload.message,
				people: action.payload.people[0],
				postPutReturnedObjectId: action.payload.people[0].id
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
