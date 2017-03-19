const initialState = {
	people: null,
	error: null
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

        default:
          return state;
    }
}
