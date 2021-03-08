import { 
    CHANGE_TREATMENT_FIELD,  
    CHANGE_LOCATION_FIELD,
    CHANGE_DATE_FIELD,
    CHANGE_TIME_FIELD,
    HIDE_MAP_FIELD
        } from './constants.js'

const initialState = {
    treatment: '',
    location: '',
    desiredDate: 'Any date',
    desiredTime: '',
    hideMap: false
}

export const searchTreatment = (state=initialState, action={}) => {
	switch(action.type) {
		case CHANGE_TREATMENT_FIELD:
            return Object.assign({}, state, {treatment: action.payload})
        case CHANGE_LOCATION_FIELD:
            return Object.assign({}, state, {location: action.payload})
        case CHANGE_DATE_FIELD:
            return Object.assign({}, state, {desiredDate: action.payload})
        case CHANGE_TIME_FIELD:
            return Object.assign({}, state, {desiredTime: action.payload})
        case HIDE_MAP_FIELD:
            return Object.assign({}, state, {hideMap: !state.hideMap})
		default:
			return state;
	}
}