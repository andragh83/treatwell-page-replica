import { 
    CHANGE_TREATMENT_FIELD,  
    CHANGE_LOCATION_FIELD,
    CHANGE_DATE_FIELD,
    CHANGE_TIME_FIELD
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

export const setDesiredTime = (text) => ({
	type: CHANGE_TIME_FIELD,
	payload: text
})

