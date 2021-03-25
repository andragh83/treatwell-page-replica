import { 
    CHANGE_TREATMENT_FIELD,  
    CHANGE_LOCATION_FIELD,
    CHANGE_DATE_FIELD,
    CHANGE_START_HOUR_FIELD,
    CHANGE_END_HOUR_FIELD,
    CHANGE_TIME_FIELD,
    HIDE_MAP_FIELD,
    SHOW_CARDS_FIELD,
    FOUND_SALONS_FIELD
        } from './constants.js'

export const setTreatment = (text) => ({
	type: CHANGE_TREATMENT_FIELD,
	payload: text
})

export const setLocation = (text) => ({
	type: CHANGE_LOCATION_FIELD,
	payload: text
})

export const setDesiredDate = (text) => ({
	type: CHANGE_DATE_FIELD,
	payload: text
})

export const setDesiredStartHour = (text) => ({
	type: CHANGE_START_HOUR_FIELD,
	payload: text
})

export const setDesiredEndHour = (text) => ({
	type: CHANGE_END_HOUR_FIELD,
	payload: text
})

export const setDesiredTime = (text) => ({
	type: CHANGE_TIME_FIELD,
	payload: text
})

export const setHideMap = (text) => ({
	type: HIDE_MAP_FIELD,
	payload: text
})

export const setShowCards = (text) => ({
	type: SHOW_CARDS_FIELD,
	payload: text
})

export const setFoundSalons = (results) => ({
        type: FOUND_SALONS_FIELD,
        payload: results
})


