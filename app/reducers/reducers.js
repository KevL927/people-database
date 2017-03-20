import update from 'react-addons-update';

const initialState = {
	people: null,
	message: null,
	error: null,
}

export default (state, action) => {
   state = state || initialState;

    switch(action.type) {
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
							error: action.payload
					});

				case 'POST_PERSON_DATA_SUCCESS':
				    return Object.assign({}, state, {
				        message: action.payload
				    });

			  case 'POST_PERSON_DATA_ERROR':
			    return Object.assign({}, state, {
			        error: action.payload
			    });

        default:
          return state;
    }
}
