import {combineReducers} from "redux"
import user from './user'
import login from './login'
import activityboxes from './activityboxes'

export default combineReducers({user, login, activityboxes})