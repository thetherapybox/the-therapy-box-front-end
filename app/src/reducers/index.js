import { combineReducers } from "redux";
import user from "./user";
import login from "./login";
import activityboxes from "./activityboxes";
import homepage from "./homepage";

export default combineReducers({ user, login, activityboxes, homepage });