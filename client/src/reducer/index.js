import {combineReducers} from 'redux'

import equipeReducer from './equipReducer'

export default combineReducers({
    equipe:equipeReducer
})