import { combineReducers } from "redux";
import { userReducer, loggedUserReducer } from "./userReducer";
import { loggedInReducer } from "./loggedInReducer";

const allReducers = combineReducers({
    allUsers: userReducer,
    isLoggedIn: loggedInReducer,
    loggedUser: loggedUserReducer
})

export default allReducers;