import { 
    CHANGE_TREATMENT_FIELD,  
    CHANGE_LOCATION_FIELD,
    CHANGE_DATE_FIELD,
    CHANGE_START_HOUR_FIELD,
    CHANGE_END_HOUR_FIELD,
    CHANGE_TIME_FIELD,
    HIDE_MAP_FIELD,
    SHOW_CARDS_FIELD,
    FOUND_SALONS_FIELD,
        } from './constants.js'

const initialSearchTreatmentState = {
    treatment: "Ladies' hair cuts",
    location: 'London',
    desiredDate: 'Any date',
    desiredTime: {
        startHour: '',
        endHour: ''
    },
    hideMap: false,
    showCards: true 
}

export const searchTreatment = (state=initialSearchTreatmentState, action={}) => {
	switch(action.type) {
		case CHANGE_TREATMENT_FIELD:
            return Object.assign({}, state, {treatment: action.payload})
        case CHANGE_LOCATION_FIELD:
            return Object.assign({}, state, {location: action.payload})
        case CHANGE_DATE_FIELD:
            return Object.assign({}, state, {desiredDate: action.payload})
        case CHANGE_START_HOUR_FIELD:
            return Object.assign(
                {}, state, 
                    {desiredTime: Object.assign(
                        {}, state.desiredTime, 
                        {startHour: action.payload}
                    )}
            )
        case CHANGE_END_HOUR_FIELD:
            return Object.assign(
                {}, state, 
                    {desiredTime: Object.assign(
                        {}, state.desiredTime, 
                        {endHour: action.payload}
                    )}
            )
        case CHANGE_TIME_FIELD:
            return Object.assign(
                {}, state, 
                    {desiredTime: Object.assign(
                        {}, state.desiredTime, 
                        {startHour: action.payload, endHour: action.payload}
                    )}
            )
        case HIDE_MAP_FIELD:
            return Object.assign({}, state, {hideMap: !state.hideMap})
        case SHOW_CARDS_FIELD:
            return Object.assign({}, state, {showCards: !state.showCards})
        case FOUND_SALONS_FIELD:
            return Object.assign({}, state, {foundSalons: action.payload})
		default:
			return state;
	}
}

const initialDisplayOnMapState = {
    foundSalons: []
}

export const displayOnMap = (state=initialDisplayOnMapState, action={}) => {
	switch(action.type) {
        case FOUND_SALONS_FIELD:
            return Object.assign({}, state, {foundSalons: action.payload})
		default:
			return state;
	}
}