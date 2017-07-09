import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

	switch(action.type) {
		case FETCH_WEATHER: 
		// return state.concat([action.payload.data]);
		// use 'concat' cos it doesn't change the old array,
		// instead, returns a new one that contains the old stuff with the new one
		// we aren't mutating our state, we are returning new instace of the state
		
		// es6 way to do it: 
		return [ action.payload.data, ...state ]
		// means: make a new array, add 'action.payload.data' as first element and add everything that is in 'state'
	}

	return state;
}